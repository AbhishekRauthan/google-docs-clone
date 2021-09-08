import supabase from "@utils/index";
import { useEffect, useState } from "react";
import Login from "@components/Login";
import MainPage from "@components/MainPage";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Session } from "@supabase/supabase-js";

interface Props {
  session: Session;
}

const IndexPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [, setSession] = useState(null);

  useEffect(() => {
    setSession(session);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <>{/*!session ? <Login /> :*/ <MainPage />}</>;
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      session: supabase.auth.session(),
    },
  };
};
