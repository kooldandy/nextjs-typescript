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
        <meta name="description" content="JavaScript wizard, chaotic good" />
        <meta name="keyword" content="saurabh ghosh, javascript, developer, kooldandy" />
        <meta name="google-site-verification" content="8tgXHJZWj0MPdU6K0a20rKKFmqDDbFCrZDZEggjLwxc" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta name='googlebot' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <script src="/js/google-tag-manager.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XLVBW5WRGX"></script>
        <script src="/js/google-analytics.js"></script>
      </Head>
      <div className="app-container">
        <header>
          <AppNavbar />
        </header>
        <main className="main">
          {children}
        </main>
        <footer>
          <AppFooter />
        </footer>
      </div>
    </>
  );
};

export default Layout;
