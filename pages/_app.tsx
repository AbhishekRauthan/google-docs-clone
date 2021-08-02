import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "@public/styles.css";
import "@material-tailwind/react/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
