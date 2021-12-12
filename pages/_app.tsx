import type { AppProps /*, AppContext */ } from "next/app";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Router from "next/router";
import "@public/styles.css";
import Loading from "@components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </>
  );
}

export default MyApp;
