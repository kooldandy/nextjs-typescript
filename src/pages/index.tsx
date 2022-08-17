import Home from "@components/templates/Home";

const IndexPage = () => {
  const name = `SAURABH GHOSH`;
  const roles = ["a Javascript Developer", "a Blogger"];
  const data = "I'm";

  return (
    <Home name={name} data={data} roles={roles}/>
  );
};

IndexPage.getTitle = () => {
  return "Home | Saurabh Ghosh";
};

export default IndexPage;
