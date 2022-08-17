import React, { FC } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/about.module.scss";
import { HeadingEnum, IAbout } from "../../interfaces";
import Heading from "@components/atoms/Heading";

const About: FC<IAbout> = (props: IAbout) => {
  const { heading, about, profilePic } = props;
  return (
    <>
      <Heading type={HeadingEnum.H1}>{heading}</Heading>
      <Container>
        <Row
          className={`${styles.about} mt-5 d-flex flex-wrap justify-content-center`}
        >
          <Col className={styles.introImageContainer}>
            <Image
              src={profilePic}
              alt="Saurabh Ghosh"
              priority
              placeholder="blur" // Optional blur-up while loading
            />
          </Col>
          <Col className={styles.introTextContainer}>
            <p className="px-3">{about.para1}</p>
            <p className="px-3">{about.para2}</p>
            <p className="px-3">{about.para3}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
