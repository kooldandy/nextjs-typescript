import React from "react";
import Layout from "@components/templates/Layout";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import "@styles/global.scss";

type NextPageWithLayout = NextPage & {
  getTitle?: (title: string) => string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const app = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getTitle = Component?.getTitle ?? ((title) => title);
  const title = getTitle(pageProps);
  
  const {props} = pageProps;
  console.log('pageProps', pageProps, props)
  return (
    <Layout title={title}>
      {props && <Component {...props} />}
      {!props && <h1>no data</h1>}
    </Layout>
  );
};

export default app;
