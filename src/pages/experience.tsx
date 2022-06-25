import { Container } from "react-bootstrap";
import Fade from "react-reveal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const ExperiencePage = () => {
  const data = {
    experiences: [
      {
        title: "Senior Software Engineer",
        company: "EPAM Systems",
        location: "Pune",
        website: "https://www.epam.com/",
        dateText: "March 2020 - June 2022",
        icon: "/images/company/epam.png",
        workDescription: [
          "Follow agile development and consistently delivering new features on time during sprints.",
          "Using Feature Driven Development(FDD) techniques to provide reliable, working software early and often.",
          "Conduct code review to ensure the work delivered by the team is of high quality standards.",
          "Taking technical interviews also mentoring the junior developers."
        ],
      },
      {
        title: "Manager(Application Developer)",
        company: "Morgan Stanley",
        location: "Mumbai",
        website: "https://www.morganstanley.com/",
        dateText: "July 2017 - March 2020",
        icon: "/images/company/ms.png",
        workDescription: [
          "Built reusable component and interactive UI.",
          "Analysis of the requirements and providing proper solution for the requirement raised by the clients.",
          "Collaborated with backend team to improve usability.",
          "Communicated updates in daily scrum meetings using JIRA software.",
          "Rewrite the existing code."
        ],
      },
      {
        title: "Systems Engineer",
        company: "Tata Consultancy Services",
        location: "Navi Mumbai",
        website: "https://www.tcs.com/",
        dateText: "Oct 2014 - July 2017",
        icon: "/images/company/tcs.png",
        workDescription: [
          "Developed the user interface with HTML, Css Jquery and AngularJs.",
          "Worked on TCS BANCS a Core Banking platform enhances the basic business of banking.",
          "Requirement gathering, analysis of the requirements."
        ],
      },
    ],
  };

  const styles = {
    iconStyle: {
      borderRadius: 50,
    },
  };

  return (
    <>
      <h1>Experience</h1>
      <Fade>
        <Container>
          <VerticalTimeline lineColor={"#ddd"}>
            {data.experiences.map((item) => (
              <VerticalTimelineElement
                key={item.title + item.dateText}
                className="vertical-timeline-element--work"
                contentStyle={{
                  borderTop: "5px solid rgb(33, 150, 243)",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={item.dateText}
                icon={<Image
                  src={item.icon}
                  alt={item.title}
                  height={75}
                  width={75}
                  style={styles.iconStyle}
                />}
              >
                <span className="position-absolute top-0 end-0 mx-2 mb-2 text-muted">{item.location}</span>
                <h2 className="vertical-timeline-element-title">
                  {item.title}
                </h2>
                <h4 className="vertical-timeline-element-subtitle">
                  <a className="text-danger" href={item.website} target="_blank">{item.company}</a>
                </h4>
                  {
                   item.workDescription.map(e => <p key={e} className="text-sm-start">{e}</p>)
                  }
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Container>
      </Fade>
    </>
  );
};

ExperiencePage.getTitle = () => {
  return "Experience";
};

export default ExperiencePage;
