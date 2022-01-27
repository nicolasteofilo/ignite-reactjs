import type { GetServerSideProps, NextPage } from "next";
import { FormEvent, useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Home.module.css";
import { parseCookies } from "nookies";
import { withSSRGuest } from "../utils/withSSRGuest";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (context) => {
  return {
    props: {},
  };
});
