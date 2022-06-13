import Fade from 'react-reveal';
import Typewriter from 'typewriter-effect';

const IndexPage = () => {

  const styles = {
    nameStyle: {
      fontSize: '5em',
      fontStretch:'extra-condensed'
    },
    inlineChild: {
      display: 'inline-block',
    }
  };

  const mainContainer =  {
    height: "100%",
    display: "flex",
    flexDirection: 'column' as 'column',
    justifyContent: "center",
    alignItems: "center",
  };

  const name = `SAURABH GHOSH`;

  const roles = ['a Javascript Developer', 'a Blogger'];
  return (
    <>
      <Fade>
        <div style={mainContainer}>
          <h1 style={styles.nameStyle} className="home-header">{name}</h1>
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
        </div>
      </Fade>
    </>
  );
};

IndexPage.getTitle = () => {
  return "Home | Next.js + TypeScript Example";
};

export default IndexPage;
