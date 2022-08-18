import React, { FC } from "react";
import { Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "@components/atoms/Image";
import { HeadingEnum, IExperience } from "@interfaces/index";
import Heading from "@components/atoms/Heading";

const Experience: FC<IExperience> = (props: IExperience) => {
  const { heading, experience } = props;
  return (
    <Container>
      <Row>
        <Heading type={HeadingEnum.H1}>{heading}</Heading>
      </Row>
      <VerticalTimeline lineColor={"#ddd"}>
        {experience?.map((item) => (
          <VerticalTimelineElement
            key={item.title + item.dateText}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ddd",
              borderTop: "5px solid rgb(33, 150, 243)",
              color: "#000",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date={item.dateText}
            icon={
              <Image
                src={item.icon}
                alt={item.title}
                height={75}
                width={75}
                style={{ borderRadius: 50 }}
                layout="responsive"
              />
            }
          >
            <section>
              <span className="position-absolute top-0 end-0 mx-2  text-muted">
                {item.location}
              </span>
              <Heading
                type={HeadingEnum.H2}
                className={"vertical-timeline-element-title fs-4 mt-2"}
              >
                {item.title}
              </Heading>
              <Heading
                type={HeadingEnum.H4}
                className={"vertical-timeline-element-subtitle"}
              >
                <a
                  className="text-danger fs-5"
                  href={item.website}
                  target="_blank"
                >
                  {item.company}
                </a>
              </Heading>

              {item?.workDescription?.map((work) => {
                return (
                  <article key={work}>
                    <p className="fs-6 text-md-start">{work}</p>
                  </article>
                );
              })}
                {item?.technology?.map((tech) => {
                  return (
                    <span
                      key={tech}
                      className="badge rounded-pill bg-success mx-1"
                    >
                      {tech}
                    </span>
                  );
                })}
            </section>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;
