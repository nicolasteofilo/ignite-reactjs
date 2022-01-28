import { ReactNode } from "react";

export type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

export type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => any;
  user: User;
  isAuthenticated: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};
