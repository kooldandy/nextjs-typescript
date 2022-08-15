import Fade from "react-reveal";
import Typewriter from "typewriter-effect";
import styles from "../styles/home.module.scss";

const IndexPage = () => {
  const name = `SAURABH GHOSH`;
  const roles = ["a Javascript Developer", "a Blogger"];

  return (
    <>
      <Fade>
        <div className={styles.homeContainer}>
          <h1 className={styles.homeContainerHeader}>{name}</h1>
          <div className={styles.homeContent}>
            <h2 className={styles.homeContentHeader}>I&apos;m&nbsp;</h2>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: roles,
              }}
            />
          </div>
        </div>
      </Fade>
    </>
  );
};

IndexPage.getTitle = () => {
  return "Home | Saurabh Ghosh";
};

export default IndexPage;
