import { FC } from "react";
import Link from "next/link";
import Head from "next/head";

const Layout: FC = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav></nav>
    </header>
    {children}
  </div>
);

export default Layout;
