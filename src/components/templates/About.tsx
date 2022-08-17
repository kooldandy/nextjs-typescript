import React, { FC } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "@/styles/about.module.scss";
import { HeadingEnum, IAbout } from "../../interfaces";
import Heading from "@components/atoms/Heading";
import Image from "@components/atoms/Image";

const About: FC<IAbout> = (props: IAbout) => {
  const { heading, about, profilePic } = props;
  return (
    <>
      <Container>
        <Row>
          <Heading type={HeadingEnum.H1}>{heading}</Heading>
        </Row>
        <Row
          className={`${styles.about} mt-5 d-flex flex-wrap justify-content-center`}
        >
          <Col className={styles.introImageContainer}>
            <Image src={profilePic} alt="Saurabh Ghosh" placeholder="blur" />
          </Col>
          <Col className={styles.introTextContainer}>
            {about.map((data) => {
              return (
                <article key={data} className="mt-2">
                  <p className="px-3">{data}</p>
                </article>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
