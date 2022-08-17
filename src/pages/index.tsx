import Typewriter from "typewriter-effect";
import styles from "@styles/home.module.scss";
import Heading from "@components/atoms/Heading";
import { HeadingEnum } from "@interfaces/index";

const IndexPage = () => {
  const name = `SAURABH GHOSH`;
  const roles = ["a Javascript Developer", "a Blogger"];
  const data = "I'm";

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

IndexPage.getTitle = () => {
  return "Home | Saurabh Ghosh";
};

export default IndexPage;
