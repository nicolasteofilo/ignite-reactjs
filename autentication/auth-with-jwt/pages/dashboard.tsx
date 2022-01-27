import { useContext, useEffect } from "react"
import { AuthContext, signOut } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth"

import { BiExit } from "react-icons/bi";

export default function Dashboard() {
  const { user, } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list'],

  })

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
  }, [])

  return (
    <>
    <h1>Dashboard: {user?.email}</h1>
    <BiExit onClick={signOut} />

    
    {userCanSeeMetrics && <h2>Metrics</h2>}
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