import { useContext, useEffect } from "react"
import { AuthContext, signOut } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth"

import { BiExit } from "react-icons/bi";
import { Can } from "../components/Can";

export default function Dashboard() {
  const { user, } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
  }, [])

  return (
    <>
    <h1>Dashboard: {user?.email}</h1>
    <BiExit onClick={signOut} />

    <Can permissions={['metrics.list']}>
      <h2>Hooks de permisão</h2> 
    </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  console.log(response.data)

  return {
    props: {}
  }
})