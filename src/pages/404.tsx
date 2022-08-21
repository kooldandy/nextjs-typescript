import NotFound from "@components/templates/NotFound";
import { ApiNameEnum, INotFound } from "@interfaces/index";
import { fetchData } from "@utils/fetch";
import Router from "next/router";
import React, { useEffect } from "react";

const Custom404 = (props: INotFound) => {
  useEffect(() => {
    setTimeout(() => {
      Router.push(props.link);
    }, 3000);
  }, []);

  return (
    <>
      <NotFound {...props} />
    </>
  );
};

Custom404.getTitle = () => {
  return "Error 404";
};

export async function getStaticProps() {
  const data = await fetchData(ApiNameEnum.NOTFOUND);

  return {
    props: { props: data },
  };
}

export default Custom404;
