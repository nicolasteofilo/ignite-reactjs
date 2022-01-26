import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";

let cookies = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["@nexauth.refreshToken"]}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response.status === 401) {
      if (error.response?.data?.code) {
        cookies = parseCookies();

        const { "@nexauth.refreshToken": refreshToken } = cookies;

        api
          .post("/refresh", {
            refreshToken,
          })
          .then((response) => {
            const { token } = response?.data;
            setCookie(undefined, "@nexauth.token", token, {
              maxAge: 60 * 60 * 24 * 30, // 30 dias
              path: "/",
            });
            setCookie(undefined, "@nexauth.refreshToken", response.data.refreshToken, {
              maxAge: 60 * 60 * 24 * 30, // 30 dias
              path: "/",
            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`;
          });
      } else {
      }
    }
  }
);
