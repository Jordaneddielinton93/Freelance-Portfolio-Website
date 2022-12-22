import Head from "next/head";
import HomeHero from "../Components/HomeHero/HomeHero";
import LogoList from "../Components/LogoList/LogoList";
import ProjectAndText from "../Components/ProjectAndText/ProjectAndText";
import FoundersNote from "../Components/FoundersNote/FoundersNote";
import { createClient } from "contentful";
import {
  Project1,
  Project2,
  Project3,
  Project4,
} from "../Components/02-Constants/ArticleDynamic";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "latestWorkCarousel",
  });
  return {
    props: {
      latestWorkImg: res.items[0].fields.latestWorkCarousel.map(
        (obj) => obj.fields.file
      ),
    },
  };
}

const Projects = ({ latestWorkImg }) => {
  return (
    <div>
      <Head>
        <title>Projects - Jordan Freelance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/greyback.png" />
      </Head>
      <HomeHero
        leftImg={"/images/dotted-bg.jpeg"}
        paragraph={`Welcome to my portfolio! My name is Jordan and I am a Web Designer,Developer and Coach. I have been working in this field for 3 year and have developed a strong set of skills and experience. In this portfolio, you will find examples of my work and accomplishments. Thank you for taking the time to visit my page. I look forward to sharing my portfolio with you.
      `}
      />
      <LogoList />
      <ProjectAndText
        slateText={"Project 1"}
        projects={Project3}
        direction={"row-reverse"}
        img1="/images/phone4/resturant_1.png"
        img2="/images/phone4/resturant_2.png"
        img3="/images/phone4/resturant_3.png"
        img4="/images/phone4/resturant_4.png"
        Href="https://italian-resturant-front-end.vercel.app/"
      />
      <LogoList />

      <ProjectAndText
        slateText={"Project 2"}
        img1="/images/phone5/visions_1.png"
        projects={Project4}
        img2="/images/phone5/visions_2.png"
        img3="/images/phone5/visions_3.png"
        img4="/images/phone5/visions_4.png"
        img5="/images/phone5/visions_5.png"
        Href="https://visions-of-peace.netlify.app/"
      />
      <LogoList />
      <ProjectAndText
        slateText={"Project 3"}
        img1="/images/phone1/bikeman1.png"
        direction={"row-reverse"}
        projects={Project1}
        img2="/images/phone1/bikeman2.png"
        img3="/images/phone1/bikeman3.png"
        img4="/images/phone1/bikeman4.png"
        img5="/images/phone1/bikeman5.png"
        Href="https://bike-man-dan-wheeldeal.netlify.app/"
      />

      {/* <SkillsAndProject /> */}
      <LogoList />

      <ProjectAndText
        slateText={"Project 4"}
        projects={Project2}
        img1="/images/phone2/groPro1.png"
        img2="/images/phone2/groPro2.png"
        img3="/images/phone2/groPro3.png"
        img4="/images/phone2/groPro4.png"
        img5="/images/phone2/groPro5.png"
        Href="https://team-grow-pro.netlify.app/"
      />
      {/* <LatestWork latestWorkImg={latestWorkImg} /> */}
      <FoundersNote />
    </div>
  );
};

export default Projects;
