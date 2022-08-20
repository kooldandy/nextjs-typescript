import About from "@components/templates/About";
import { ApiNameEnum, IAbout } from "@interfaces/index";
import { fetchData } from "@utils/fetch";

const AboutPage = (props: IAbout) => {
  return <About {...props} />;
};

AboutPage.getTitle = () => {
  return "About";
};

export async function getStaticProps() {
  const data = await fetchData(ApiNameEnum.ABOUT);

  return {
    props: { props: data },
  };
}

export default AboutPage;
