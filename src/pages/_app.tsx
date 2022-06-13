import React from "react";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

type NextPageWithLayout = NextPage & {
  getTitle?: (pageProps: any) => string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const app = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getTitle = Component?.getTitle ?? ((title) => title);
  const title = getTitle(pageProps);

  return (
    <Layout title={title}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default app;
