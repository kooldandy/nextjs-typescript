import React from "react";
import Layout from "@components/templates/Layout";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import "@styles/global.scss";
import NoData from "@components/molecules/NoData";

type NextPageWithLayout = NextPage & {
  getTitle?: (title: string) => string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const app = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getTitle = Component?.getTitle ?? ((title) => title);
  const title = getTitle(pageProps);
  const { props } = pageProps;
  return (
    <Layout title={title}>
      {props && <Component {...props} />}
      {!props && <NoData />}
    </Layout>
  );
};

export default app;
