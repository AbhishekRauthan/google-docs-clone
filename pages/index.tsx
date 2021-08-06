import supabase from "@utils/index";
import { useEffect, useState } from "react";
import Login from "@components/Login";
import MainPage from "@components/MainPage";

const IndexPage = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <>{/*!session ? <Login /> :*/ <MainPage />}</>;
};

export default IndexPage;
