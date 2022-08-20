import Skills from "@components/templates/Skills";
import { ApiNameEnum, ISkills } from "@interfaces/index";
import { fetchData } from "@utils/fetch";


const SkillsPage = (props: ISkills) => {
 
  return (
   <Skills {...props}/>
  );
};

SkillsPage.getTitle = () => {
  return "Skills";
};

export async function getStaticProps() {
  const data = await fetchData(ApiNameEnum.SKILLS);

  return {
    props: { props: data },
  };
}

export default SkillsPage;
