import Head from "next/head";

import Folders from "../Components/Folders/Folders";
import FoundersNote from "../Components/FoundersNote/FoundersNote";
import ContactHero from "../Components/ContactHero/ContactHero";
import ContactConfirmation from "../Components/ContactConfirmation/ContactConfirmation";
import { useState } from "react";

const Contact = () => {
  let [confirmation, setConfirmation] = useState(false);
  let [loading, setLoading] = useState(true);
  return (
    <div>
      <Head>
        <title>Contact - Jordan Freelance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/greyback.png" />
      </Head>
      {confirmation && (
        <ContactConfirmation
          loading={loading}
          setConfirmation={setConfirmation}
        />
      )}
      <ContactHero setLoading={setLoading} setConfirmation={setConfirmation} />
      <Folders />
      <FoundersNote />
    </div>
  );
};

export default Contact;
