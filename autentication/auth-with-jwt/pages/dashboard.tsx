import Router from "next/router";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { singIn, isAuthenticated, user } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <p>{user?.email}</p>
      <p>{user?.roles}</p>
      <p>{user?.permissions}</p>
      {isAuthenticated && <p>Autenticado</p>}
    </>
  );
}
