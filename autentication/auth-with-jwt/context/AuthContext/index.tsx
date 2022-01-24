import { createContext, useContext, useEffect, useState } from "react";
import Router from "next/router";
import { toast } from "react-toastify";
import { setCookie, parseCookies } from "nookies";

import { api } from "../../services/api";

import {
  AuthContextData,
  AuthProviderProps,
  SingInCredentials,
  User,
} from "./types";


const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = user ? true : false;

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies["@nexauth.refreshToken"]) {
      api
        .get("/me")
        .then((response) => {
          const { email, permissions, roles } = response.data;

          setUser({ email, permissions, roles });
        })
        .catch((err) => {
          toast.error("Não foi possível carregar o usuário");
        });
    }
  }, []);

  async function singIn({ email, password }: SingInCredentials) {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      });

      const { permissions, roles, token, refreshToken } = response.data;

      setCookie(undefined, "@nexauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 dias
        path: "/",
      });
      setCookie(undefined, "@nexauth.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 dias
        path: "/",
      });

      setUser({
        email,
        permissions,
        roles,
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (error) {
      toast.error("Falha na autenticação, verifique seus dados");
    }
  }

  return (
    <AuthContext.Provider value={{ singIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

// create hook
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
