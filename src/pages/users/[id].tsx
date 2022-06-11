import { GetStaticProps, GetStaticPaths } from "next";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import ListDetail from "../../components/ListDetail";
import Link from "next/link";

type Props = {
  item?: User;
  errors?: string;
  title?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <>
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </>
    );
  }

  return (
    <>
      <Link href="/users">
        <a>Back</a>
      </Link>
      {item && <ListDetail item={item} />}
    </>
  );
};

StaticPropsDetail.getTitle = ({ title }: any) => {
  return title;
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleUserData.find((data) => data.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time

    const title = `${
      item ? item.name : "User Detail"
    } | Next.js + TypeScript Example`;
    return { props: { item, title } };
  } catch (err: any) {
    const title = "Error | Next.js + TypeScript Example";
    return { props: { errors: err.message, title } };
  }
};
