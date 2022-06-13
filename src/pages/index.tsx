import Link from "next/link";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Fade from 'react-reveal';
import Typewriter from 'typewriter-effect';

const IndexPage = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const styles = {
    nameStyle: {
      fontSize: '5em',
      fontStretch:'extra-condensed'
    },
    inlineChild: {
      display: 'inline-block',
    },
    mainContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  const name = `SAURABH GHOSH`;

  const roles = ['a Javascript Developer', 'a Blogger'];
  return (
    <>
      {/* <h1>Hello Next.js 👋</h1>
      <p>This is the home page</p>
      <div style={style}>
        <Spinner animation="grow" />
      </div>

      <Link href="/about">
        <a>About</a>
      </Link> */}
      <Fade>
        <div style={styles.mainContainer}>
          <h1 style={styles.nameStyle} className="home-header text-sm-start">{name}</h1>
          <div style={{ flexDirection: 'row' }}>
            <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: roles,
              }}
            />
          </div>
          {/* <Social /> */}
        </div>
      </Fade>
    </>
  );
};

IndexPage.getTitle = () => {
  return "Home | Next.js + TypeScript Example";
};

export default IndexPage;
