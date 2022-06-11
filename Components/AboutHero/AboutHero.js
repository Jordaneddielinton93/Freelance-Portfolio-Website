import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./AboutHero.module.css"
import Image from "next/image"
const AboutHero = () => {
  return <main className={style.Container}>
    <div className={style.Container_Main}>
      <section className={style.Container_Main_section}>
        <div className={style.Container_Main_section_side}>
          <h2 className={style.List_Heading}>Hard Skills</h2>
          <ul className={style.List}>
            <li>- UX Discovery</li>
            <li>- HTML</li>
            <li>- CSS/SASS/Modules</li>
            <li>- React & Next.js</li>
            <li>- Styled Components</li>
            <li>- Node.js</li>
            <li>- PostgreSQL</li>
            <li>- Jest/Testing</li>
            <li>- Strapi CMS</li>
            <li>- Figma</li>
          </ul>

          <Secondary_ButtonCTA width="220px"
            Label={"Learn Hard Skills, my articals"} />
        </div>
      </section>




      <section className={style.Container_Main_section}>
        <div className={style.Middle}>
          <h2 className={style.Middle_Top_Lable}>Hi, {`I'm`} Jordan</h2>
          <div className={style.Middle_Container}>
            <span className={style.NavContainer_logo_span}>
              <Image src="/images/greyback.png" alt="Selfie image" width="280px" height="280px" />
            </span>
          </div>
          <h2 className={style.Middle_Bottom_Lable}>Web-developer</h2>
        </div>
      </section>




      <section className={style.Container_Main_section}>
        <div className={style.Container_Main_section_side}>
          <h2 className={style.List_Heading}>Soft Skills</h2>
          <ul className={style.List}>
            <li>- Agile Methodologies</li>
            <li>- Disney Ideation</li>
            <li>- Jira Workflow</li>
            <li>- User Personas</li>
            <li>- User Flows</li>
            <li>- Site Maps</li>
            <li>- Wireframes</li>

          </ul>

          <Secondary_ButtonCTA width="220px" Label={"Learn Soft Skills, my articals"} />
        </div>
      </section>
    </div>
  </main>;
};

export default AboutHero;
