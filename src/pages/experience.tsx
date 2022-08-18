import Experience from "@components/templates/Experience";

const ExperiencePage = () => {
  const data = {
    heading: "Experience",
    experiences: [
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
          "Train new team memebers"
        ],
        technology:[
          'ReactJs', 'Typescript', 'NextJs', 'Atomic-Design', 'Bootstrap'
        ]
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
        technology:[
          'ReactJs', 'Typescript', 'Angular', 'Webpack', 'Cypress'
        ]
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
        technology:[
          'Typescript', 'Angular', 'Bootstrap', 'Karma', 'Jasmine'
        ]
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
        technology:[
          'AngularJs', 'ES6', 'HTML5', 'CSS3', 'SDLC'
        ]
      },
    ],
  };

  return (
    <>
      <Experience heading={data.heading} experience={data.experiences}/>
    </>
  );
};

ExperiencePage.getTitle = () => {
  return "Experience";
};

export default ExperiencePage;
