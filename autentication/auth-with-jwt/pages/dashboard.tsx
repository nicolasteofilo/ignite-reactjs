import Router from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  const { singIn, isAuthenticated, user } = useAuth();

  useEffect(() => {
    api.get('/me').then(response => {
      console.log(response);
    })
    .catch(err => {
      toast.error('Não foi possível carregar o usuário');
    })
  }, [])

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
