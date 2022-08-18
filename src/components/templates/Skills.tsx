import React, { FC } from "react";
import { Container, Row } from "react-bootstrap";
import Image from "@components/atoms/Image";
import styles from "@styles/skills.module.scss";
import { HeadingEnum, ISkills } from "@interfaces/index";
import Heading from "@components/atoms/Heading";

const Skills: FC<ISkills> = (props: ISkills) => {
  const { heading, intro, skills } = props;
  return (
    <>
      <Container>
        <Row>
          <Heading type={HeadingEnum.H1}>{heading}</Heading>
        </Row>
        <Row>
          <article className="mt-2">
            <p className="fs-4 text-center">{intro}</p>
          </article>
        </Row>
        {skills?.map((rows) => (
          <div key={rows.title}>
            <Heading type={HeadingEnum.H5} className='mt-3'>{rows.title}</Heading>
            {rows.items.map((item) => (
              <div key={item.title} className={styles.skillsImage}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  height={75}
                  width={75}
                  style={{ borderRadius: 20 }}
                  caption={item.title}
                />
              </div>
            ))}
          </div>
        ))}
      </Container>
    </>
  );
};

export default Skills;
