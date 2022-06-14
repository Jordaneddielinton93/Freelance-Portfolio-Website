import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./AboutHero.module.css"
import Image from "next/image"
import Skills from "../Skills/Skills";
const AboutHero = () => {
  return <main className={style.Container}>
    <div className={style.Container_Main}>
      <Skills ListHeading={"Hard Skills"} listItems={[
        "UX Discovery",
        "HTML",
        "CSS/SASS/Modules",
        " React & Next.js",
        "Styled Components",
        "Node.js",
        "PostgreSQL",
        "Jest/Testing",
        "Strapi CMS",
        "Figma"
      ]} />




      <section className={style.Container_Main_section}>
        <div className={style.Middle}>
          <h2 className={style.Middle_Top_Lable}>Hi, {`I'm`} Jordan</h2>
          <div className={style.Middle_Container}>
            <span className={style.NavContainer_logo_span}>
              <Image src="/images/greyback.png" alt="Selfie image" layout="fill" />
            </span>
          </div>
          <h2 className={style.Middle_Bottom_Lable}>Web-developer</h2>
        </div>
      </section>

      <Skills ListHeading={"Soft Skills"} listItems={[
        "Agile Methodologies",
        " Disney Ideation",
        "Jira Workflow",
        " User Personas",
        "User Flows",
        "Site Maps",
        "Wireframes",

      ]} />
    </div>
  </main>;
};

export default AboutHero;
