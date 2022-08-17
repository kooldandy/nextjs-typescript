import About from "@components/templates/About";
import profilePic from "../../public/me.jpg";

const AboutPage = () => {
  const heading = "Hey!👋 I'm Saurabh";

  const about = {
    para1:
      "I'm a Senior Software Enginner at Nagarro, originally from Varanasi, India.",
    para2:
      "My areas of interest lie in Frontend Development, Web developement, UI automation and DevOps. I have experience building enterprise grade WebApps and scalable frontend architectures.",
    para3:
      "I also enjoy playing the table-tennis, vollyball, listening songs and playing video games.",
  };
  return <About heading={heading} about={about} profilePic={profilePic} />;
};

AboutPage.getTitle = () => {
  return "About";
};

export default AboutPage;
