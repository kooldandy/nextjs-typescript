import { IHome, IAbout, ISkills, IExperience } from "@interfaces/index";

export const homeData: IHome = {
  name: "SAURABH GHOSH",
  roles: ["a Javascript Developer", "a Blogger"],
  data: "I'm",
};

export const aboutData: IAbout = {
  heading: "Hey!👋 I'm Saurabh",
  about: [
    "I'm a Senior Software Enginner at Nagarro, originally from Varanasi, India.",
    "A confident, professional, creative and resourceful person with the ability to work efficiently in fast-paced, multitasking environments, along with maintaining a positive attitude and strong work ethics.",
    "My areas of interest lie in Frontend Development, Web developement, UI automation and DevOps. I have experience building enterprise grade WebApps and scalable frontend architectures.",
    "I also enjoy playing the table-tennis, vollyball, listening songs and playing video games.",
  ],
  profilePic: '/me.jpg'
};

export const skillsData: ISkills = {
  heading: "Skills",
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
        {
          icon: "/images/skills/sass.png",
          title: "Sass",
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

export const experienceData: IExperience = {
  heading: "Experience",
  experience: [
    {
      title: "Associate Staff Engineer",
      company: "Nagarro",
      location: "Lucknow",
      website: "https://www.nagarro.com/en",
      dateText: "July 2022 - till now",
      icon: "/images/company/nagarro.jpg",
      workDescription: [
        "Participated in client meetings - Analyzing their needs, provide technical solutions and setup estimates.",
        "Technical analysis and time estimates.",
        "Architect and build web based solutions based on client needs.",
        "Setup initial project structure and dependencies.",
        "Setup specific workflows - formatting and linting rules etc.",
        "Train new team memebers",
      ],
      technology: [
        "ReactJs",
        "Typescript",
        "NextJs",
        "Atomic-Design",
        "Bootstrap",
      ],
    },
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
        "Taking technical interviews also mentoring the junior developers.",
      ],
      technology: ["ReactJs", "Typescript", "Angular", "Webpack", "Cypress"],
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
        "Rewrite the existing code.",
      ],
      technology: ["Typescript", "Angular", "Bootstrap", "Karma", "Jasmine"],
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
        "Requirement gathering, analysis of the requirements.",
      ],
      technology: ["AngularJs", "ES6", "HTML5", "CSS3", "SDLC"],
    },
  ],
};
