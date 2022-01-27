import axios, { AxiosError } from "axios";
import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupAPIClient(context = undefined) {
  let cookies = parseCookies(context);
  const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${cookies["nextauth.token"]}`,
    },
  });
  
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response.data?.code === "token.expired") {
          cookies = parseCookies();
  
          const { 'nextauth.refreshToken': refreshToken } = cookies;
          const originalConfig = error.config;
  
          if (!isRefreshing) {
            isRefreshing = true;
  
            api
              .post("/refresh", {
                refreshToken,
              })
              .then((response) => {
                const { token } = response.data;
  
                setCookie(context, "nextauth.token", token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });
  
                setCookie(
                  context,
                  "nextauth.refreshToken",
                  response.data.refreshToken,
                  {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: "/",
                  }
                );
  
                api.defaults.headers["Authorization"] = `Bearer ${token}`;
  
                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(token)
                );
                failedRequestsQueue = [];
  
                if (process.browser) {
                  // se for um erro qualquer que não seja o token expirado, mas seja de autorização,
                  destroyCookie(context, "nextauth.refreshToken");
                  destroyCookie(context, "nextauth.token");
  
                  Router.push("/");
                }
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request) => request.onFailure(err));
                failedRequestsQueue = [];
              })
              .finally(() => {
                isRefreshing = false;
              });
          }
  
          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;
  
                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (process.browser) {
            // se for um erro qualquer que não seja o token expirado, mas seja de autorização,
            destroyCookie(context, "nextauth.refreshToken");
            destroyCookie(context, "nextauth.token");
  
            Router.push("/");
          }
        }
      }
  
      return Promise.reject(error);
    }
  );

  return api;
}
