import React from "react";
import { SocialIcon } from "react-social-icons";

const AppFooter = () => {
  const data = {
    social: [
      {
        network: "twitter",
        href: "https://twitter.com/kkooldandy",
      },
      {
        network: "linkedin",
        href: "https://www.linkedin.com/in/kooldandy/",
      },
      {
        network: "github",
        href: "https://github.com/kooldandy",
      },
      {
        network: "google",
        href: "mailto:kkooldandy@gmail.com",
      },
    ],
  };

  const styles = {
    iconStyle: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      height: 25,
      width: 25,
    },
  };

  return (
    <footer>
      <p className="text-muted lh-1 mb-2 fs-7">
        Built with&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          className="text-danger font-monospace"
        >
          React
        </a>
        ,&nbsp;
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-danger font-monospace"
        >
          NextJs
        </a>{" "}
        and&nbsp;
        <a
          href="https://react-bootstrap.github.io/"
          target="_blank"
          className="text-danger font-monospace"
        >
          Bootstrap
        </a>{" "}
        and deployed on&nbsp;
        <a
          href="https://vercel.com/"
          target="_blank"
          className="text-danger font-monospace"
        >
          Vercel
        </a>
      </p>
      {data.social.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          //bgColor={social.bgColor}
          target="_blank"
          rel="noopener"
        />
      ))}
      <p style={{ fontSize: "0.85rem" }} className="text-muted fs-7 mt-n5 mb-0">
        &copy; Copyright {new Date().getFullYear()}, All Rights Reserved
      </p>
    </footer>
  );
};

export default AppFooter;
