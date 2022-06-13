import Fade from "react-reveal";
import Typewriter from "typewriter-effect";

const IndexPage = () => {
  const name = `SAURABH GHOSH`;
  const roles = ["a Javascript Developer", "a Blogger"];

  const styles = {
    inlineChild: {
      display: "inline-block",
    },
    mainContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <Fade>
        <div style={styles.mainContainer}>
          <h1 className="home-header">{name}</h1>
          <div style={{ flexDirection: "row" }}>
            <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
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
  return "Home | Next.js + TypeScript Example";
};

export default IndexPage;
