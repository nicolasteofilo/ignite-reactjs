import { ReactNode } from "react";

// infos do úsuario
export type SingInCredentials = {
  email: string;
  password: string;
};

// infos do usuario autenticado
export type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

// informações dentro do contexto
export type AuthContextData = {
  singIn(credentials: SingInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

// propriedades do AuthProvider
export type AuthProviderProps = {
  children: ReactNode; // componentes, textos, nuns e etc
};
