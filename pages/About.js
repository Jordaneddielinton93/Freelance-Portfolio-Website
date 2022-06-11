import AboutHero from "../Components/AboutHero/AboutHero";
import LatestWork from "../Components/LatestWork/LatestWork"
import HowICanHelp from "../Components/HowICanHelp/HowICanHelp"
import FoundersNote from "../Components/FoundersNote/FoundersNote"
import NavBar from "../Components/NavBar/NavBar";
import AboutMe from "../Components/AboutMe/AboutMe.js";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHero />
      <LatestWork />
      <AboutMe />
      <HowICanHelp />
      <FoundersNote />
    </div>
  );
};

export default About;
