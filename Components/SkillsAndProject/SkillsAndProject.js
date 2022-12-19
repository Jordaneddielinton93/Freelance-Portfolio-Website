import Phone1 from "../PhoneShell/Phone1";
import Skills from "../Skills/Skills";
import style from "./SkillsAndProject.module.css";
const SkillsAndProject = () => {
  return (
    <main className={style.Container}>
      <div className={style.Container_Main}>
        <Skills
          ListHeading={"Hard Skills"}
          listItems={[
            "UX Discovery",
            "HTML",
            "CSS/SASS/Modules",
            " React & Next.js",
            "Styled Components",
            "Node.js",
            "PostgreSQL",
            "Jest/Testing",
            "Strapi CMS",
            "Figma",
          ]}
        />

        <Phone1
          img1="/images/phone3/img1.png"
          img2="/images/phone3/img2.png"
          img3="/images/phone3/img3.png"
          img4="/images/phone3/img4.png"
        />

        <Skills
          ListHeading={"Soft Skills"}
          listItems={[
            "Agile Methodologies",
            " Disney Ideation",
            "Jira Workflow",
            " User Personas",
            "User Flows",
            "Site Maps",
            "Wireframes",
          ]}
        />
      </div>
    </main>
  );
};

export default SkillsAndProject;
