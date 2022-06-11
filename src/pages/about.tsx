import Link from "next/link";

const AboutPage = () => (
  <>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

AboutPage.getTitle = () => {
  return "About | Next.js + TypeScript Example";
};

export default AboutPage;
