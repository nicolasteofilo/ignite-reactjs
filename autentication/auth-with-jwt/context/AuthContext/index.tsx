import { createContext, useContext, useState } from "react";
import Router from 'next/router'
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { AuthContextData, AuthProviderProps, SingInCredentials, User } from './types'

// contexto
const AuthContext = createContext({} as AuthContextData);

// pegar o provider do contexto
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = user ? true : false;

  async function singIn({ email, password }: SingInCredentials) {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      });

      const { permissions, roles } = response.data;

      setUser({
        email,
        permissions,
        roles,
      });

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
