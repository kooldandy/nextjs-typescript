import { Container } from "react-bootstrap";
import Fade from "react-reveal";
import Image from "next/image";

const SkillsPage = () => {
  const styles = {
    iconStyle: {
      borderRadius: 20,
    },
    introTextContainer: {
      whiteSpace: "pre-wrap" as "pre-wrap",
    },
  };


  const data = {
    intro:
      "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
    skills: [
      {
        title: "Languages",
        items: [
          {
            icon: "/images/skills/ts.png",
            title: "Typescript",
          },
          {
            icon: "/images/skills/js.png",
            title: "JavaScript",
          },
          {
            icon: "/images/skills/html.png",
            title: "HTML",
          },
          {
            icon: "/images/skills/css.png",
            title: "CSS",
          },
        ],
      },
      {
        title: "Frameworks",
        items: [
          {
            icon: "/images/skills/react.png",
            title: "React",
          },
          {
            icon: "/images/skills/angular.png",
            title: "Angular",
          },
          {
            icon: "/images/skills/nodejs.png",
            title: "Nodejs",
          },
          {
            icon: "/images/skills/nextjs.png",
            title: "NextJs",
          },
          {
            icon: "/images/skills/bootstrap.png",
            title: "Bootstrap",
          },
        ],
      },
      {
        title: "State management",
        items: [
          {
            icon: "/images/skills/redux.png",
            title: "Redux",
          },
          {
            icon: "/images/skills/mobx.png",
            title: "Mobx",
          },
          {
            icon: "/images/skills/ngxs.png",
            title: "Ngxs",
          },
        ],
      },
      {
        title: "Technologies",
        items: [
          {
            icon: "/images/skills/webpack.png",
            title: "Webpack",
          },
          {
            icon: "/images/skills/babel.png",
            title: "Babel",
          },
          {
            icon: "/images/skills/rxjs.png",
            title: "Rxjs",
          },
          {
            icon: "/images/skills/gulp.png",
            title: "Gulp",
          },
        ],
      },
      {
        title: "Unit test",
        items: [
          {
            icon: "/images/skills/jest.png",
            title: "Jest",
          },
          {
            icon: "/images/skills/enzyme.png",
            title: "Enzyme",
          },
          {
            icon: "/images/skills/karma.png",
            title: "Karma",
          },
          {
            icon: "/images/skills/jasmine.png",
            title: "Jasmine",
          },
        ],
      },
      {
        title: "Tools & Platforms",
        items: [
          {
            icon: "/images/skills/postman.png",
            title: "Postman",
          },
          {
            icon: "/images/skills/git.png",
            title: "Git",
          },
          {
            icon: "/images/skills/docker.png",
            title: "Docker",
          },
          {
            icon: "/images/skills/vsc.png",
            title: "Visual Studio Code",
          },
          {
            icon: "/images/skills/github.png",
            title: "Github",
          },
          {
            icon: "/images/skills/gitlab.png",
            title: "Gitlab",
          },
          {
            icon: "/images/skills/jira.png",
            title: "Jira",
          },
        ],
      },
      {
        title: "Automation",
        items: [
          {
            icon: "/images/skills/cypress.png",
            title: "Cypress",
          },
        ],
      },
      {
        title: "Database",
        items: [
          {
            icon: "/images/skills/postgresql.png",
            title: "PostgreSQL",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Fade>
        <h1>Skills</h1>
        <Container>
          <h4 style={styles.introTextContainer}>{data.intro}</h4>
          {data.skills?.map((rows) => (
            <div key={rows.title}>
              <br />
              <h5>{rows.title}</h5>
              {rows.items.map((item) => (
                <div
                  key={item.title}
                  style={{ display: "inline-block", margin: "0 5px" }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    height={75}
                    width={75}
                    style={styles.iconStyle}
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          ))}
        </Container>
      </Fade>
    </>
  );
};

SkillsPage.getTitle = () => {
  return "Skills";
};

export default SkillsPage;
