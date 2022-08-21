import React from "react";

const Custom404 = (props: {message}) => {
  return <h1>{props.message}</h1>;
};

Custom404.getTitle = () => {
  return "Error 404";
};

export async function getStaticProps() {

  const data = {message: '404 - Oops Page Not Found'}

  return {
    props: {props: data}
  }
}

export default Custom404;
