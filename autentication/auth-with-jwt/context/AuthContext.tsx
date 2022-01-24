import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

// infos do úsuario
type SingInCredentials = {
  email: string;
  password: string;
};

// informações dentro do contexto
type AuthContextData = {
  singIn(credentials: SingInCredentials): Promise<void>;
  isAuthenticated: boolean;
};

// propriedades do AuthProvider
type AuthProviderProps = {
  children: ReactNode; // componentes, textos, nuns e etc
};

// contexto
const AuthContext = createContext({} as AuthContextData);

// pegar o provider do contexto
export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function singIn({ email, password }: SingInCredentials) {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
        toast.error("Falha na autenticação, verifique seus dados");
    }
  }

  return (
    <AuthContext.Provider value={{ singIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// create hook
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
