import NavBar from "../Components/NavBar/NavBar";
import Folders from "../Components/Folders/Folders";
import FoundersNote from "../Components/FoundersNote/FoundersNote";
import ContactHero from "../Components/ContactHero/ContactHero";
import ContactConfirmation from "../Components/ContactConfirmation/ContactConfirmation";
import { useState } from "react";
const Contact = () => {
  let [confirmation, setConfirmation] = useState(false)
  return (
    <div>
      {confirmation && <ContactConfirmation setConfirmation={setConfirmation} />}

      <NavBar />
      <ContactHero setConfirmation={setConfirmation} />
      <Folders />
      <FoundersNote />
    </div>
  );
};

export default Contact;
