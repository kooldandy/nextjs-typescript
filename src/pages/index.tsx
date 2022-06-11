import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <p>This is the home page</p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  );
};

IndexPage.getTitle = () => {
  return "Home | Next.js + TypeScript Example";
};

export default IndexPage;
