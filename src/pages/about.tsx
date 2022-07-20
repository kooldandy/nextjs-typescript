import { Container, Col, Row } from "react-bootstrap";
import Fade from "react-reveal";
import Image from "next/image";
import profilePic from "../../public/me.jpg";

const AboutPage = () => {
  const about1 =
    "I'm a Senior Software Enginner at Nagarro, originally from Varanasi, India.";
  const about2 =
    "My areas of interest lie in Frontend Development, Web developement, UI automation and DevOps. I have experience building enterprise grade WebApps and scalable frontend architectures.";
  const about3 =
    "I also enjoy playing the table-tennis, vollyball, listening songs and playing video games.";
  const styles = {
    introImageContainer: {
      margin: 10,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    introTextContainer: {
      margin: '0 10px',
      textAlign: "left" as "left",
      fontSize: "1.2em",
      fontWeight: 500,
    },
  };

  return (
    <>
      <Fade>
        <h1>Hey!👋 I'm Saurabh</h1>
        <Container>
          <Row className="about mt-5 d-flex flex-wrap justify-contect-center">
            <Col style={styles.introImageContainer}>
              <Image
                src={profilePic}
                alt="Saurabh Ghosh"
                priority
                placeholder="blur" // Optional blur-up while loading
              />
            </Col>
            <Col style={styles.introTextContainer}>
              <p className="px-3">{about1}</p>
              <p className="px-3">{about2}</p>
              <p className="px-3">{about3}</p>
            </Col>
          </Row>
        </Container>
      </Fade>
    </>
  );
};

AboutPage.getTitle = () => {
  return "About";
};

export default AboutPage;
