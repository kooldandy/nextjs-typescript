import React, { FC } from "react";
import styles from "@styles/home.module.scss";
import Heading from "@components/atoms/Heading";
import { HeadingEnum, IHome } from "@interfaces/index";
import Typewriter from "typewriter-effect";

const Home: FC<IHome> = (props: IHome) => {
  const { name, data, roles } = props;
  return (
    <>
      <div className={styles.homeContainer}>
        <Heading type={HeadingEnum.H1} className={styles.homeContainerHeader}>
          {name}
        </Heading>
        <div className={styles.homeContent}>
          <Heading type={HeadingEnum.H2} className={styles.homeContentHeader}>
            {data}&nbsp;
          </Heading>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: roles,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
