import React, { FC } from "react";
import styles from "@styles/home.module.scss";
import Heading from "@components/atoms/Heading";
import { HeadingEnum, IHome } from "@interfaces/index";
import Typewriter from "typewriter-effect";

const Home: FC<IHome> = (props: IHome) => {
  const { name, data, roles } = props;
  return (
    <>
      <div className={`${styles.homeContainer} h-100 d-flex flex-column justify-content-center align-items-center`}>
        <Heading type={HeadingEnum.H1} className={styles.homeContainerHeader}>
          {name}
        </Heading>
        <div className="d-flex font-monospace">
          <Heading type={HeadingEnum.H4} className="mt-1">
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
