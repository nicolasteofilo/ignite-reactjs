import { signOut } from "../contexts/AuthContext"
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth"

import { BiExit } from "react-icons/bi";

export default function Metrics() {

  return (
    <>
    <h1>Metrics</h1>
    <BiExit onClick={signOut} />
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
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
})