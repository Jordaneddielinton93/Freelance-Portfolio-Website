import Head from "next/head";
import CommunityHero from "../Components/CommunityHero/CommunityHero";

const Community = () => {
  return (
    <div>
      <Head>
        <title>Community - Jordan Freelance</title>
        <meta name="description" content="Kzee" />
        <link rel="icon" href="/images/greyback.png" />
      </Head>
      <CommunityHero />
    </div>
  );
};

export default Community;
