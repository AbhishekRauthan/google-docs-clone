import Link from "next/link";
import Layout from "@components/Layout";
import supabase from "@utils/index";
import { useEffect, useState } from "react";
import Login from "@components/Login";

const MainPage = () => <Layout></Layout>;

const IndexPage = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <>{!session ? <Login /> : <MainPage />}</>;
};

export default IndexPage;
