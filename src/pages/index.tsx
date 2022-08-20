import Home from "@components/templates/Home";
import { ApiNameEnum, IHome } from "@interfaces/index";
import {fetchData} from "@utils/fetch";

const IndexPage = (props: IHome) => {
  console.log('props', props);
  return (
    <Home {...props}/>
  );
};

IndexPage.getTitle = () => {
  return "Home | Saurabh Ghosh";
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const data = await fetchData(ApiNameEnum.HOME);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {props: data}
  }
}

export default IndexPage;
