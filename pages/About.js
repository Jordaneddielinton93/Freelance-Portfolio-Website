import AboutHero from "../Components/AboutHero/AboutHero";
import LatestWork from "../Components/LatestWork/LatestWork"
import HowICanHelp from "../Components/HowICanHelp/HowICanHelp"
import FoundersNote from "../Components/FoundersNote/FoundersNote"
import AboutMe from "../Components/AboutMe/AboutMe.js";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({
    content_type: "latestWorkCarousel"
  })
  return {
    props: {
      latestWorkImg: res.items[0].fields.latestWorkCarousel.map((obj) => obj.fields.file)
    }
  }
}

const About = ({ latestWorkImg }) => {
  return (
    <div>
      <Head>
        <title>About - Jordan Freelance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/greyback.png" />
      </Head>
      <AboutHero />
      <LatestWork latestWorkImg={latestWorkImg} />
      <AboutMe />
      <HowICanHelp />
      <FoundersNote />


    </div>
  );
};

export default About;
