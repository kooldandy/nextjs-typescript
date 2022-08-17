import React, { FC } from "react";
import { Container } from "react-bootstrap";
import Image from "@components/atoms/Image";
import styles from "@styles/skills.module.scss";
import { ISkills } from "@interfaces/index";

const Skills: FC<ISkills> = (props: ISkills) => {
  const { heading, intro, skills } = props;
  return (
    <>
      <h1>{heading}</h1>
      <Container>
        <h4 className={styles.skillsIntro}>{intro}</h4>
        {skills?.map((rows) => (
          <div key={rows.title}>
            <br />
            <h5>{rows.title}</h5>
            {rows.items.map((item) => (
              <div key={item.title} className={styles.skillsImage}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  height={75}
                  width={75}
                  style={{ borderRadius: 20 }}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </>
  );
};

export default Skills;
