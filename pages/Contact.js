import style from "../styles/Contact.module.css";
import HomeHero from "../Components/HomeHero/HomeHero";
import NavBar from "../Components/NavBar/NavBar";
import Folders from "../Components/Folders/Folders";
import FoundersNote from "../Components/FoundersNote/FoundersNote";
import ContactHero from "../Components/ContactHero/ContactHero";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <ContactHero />
      <Folders />
      <FoundersNote />
    </div>
  );
};

export default Contact;
