import { groq } from "next-sanity";
import { sanityClient } from "../lib/sanity.client";
import "../styles/page.css";

export async function generateMetadata() {
  const { title } = await sanityClient()?.fetch(groq`*[id == homePage][0]{...}`);
  return { title: title || "Not found" };
}

const Home = async () => {
  const data = await sanityClient()?.fetch(groq`*[id == homePage][0]{...}`);
  if (!data) {
    notFound();
  }
  const { title } = data;

  return (
    <main className="home">
      Hello
      <br />
      Title: {title}
    </main>
  );
};

export default Home;
