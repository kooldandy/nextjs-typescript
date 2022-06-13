import React, { ReactNode } from "react";
import Head from "next/head";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="app-container">
        <header>
          <AppNavbar />
        </header>
        <main>{children}</main>

        <footer>
          <AppFooter/>
        </footer>
      </div>
    </>
  );
};

export default Layout;
