import Experience from "@components/templates/Experience";
import { ApiNameEnum, IExperience } from "@interfaces/index";
import { fetchData } from "@utils/fetch";

const ExperiencePage = (props: IExperience) => {
  return (
    <>
      <Experience {...props}/>
    </>
  );
};

ExperiencePage.getTitle = () => {
  return "Experience";
};

export async function getStaticProps() {
  const data = await fetchData(ApiNameEnum.EXPERIENCES);

  return {
    props: { props: data },
  };
}

export default ExperiencePage;
