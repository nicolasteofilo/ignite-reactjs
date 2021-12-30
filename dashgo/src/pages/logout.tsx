/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function logOut() {
  const { push } = useRouter();
  function exit() {
    push("/");
  }
  useEffect(() => {
    exit();
  }, []);
  return null
}