
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./Skills.module.css"
const Skills = ({ ListHeading, listItems }) => {
  return (
    <section className={style.Container_Main_section}>
      <div className={style.Container_Main_section_side}>
        <h2 className={style.List_Heading}>{ListHeading}</h2>
        <ul className={style.List}>
          {listItems.map((item) => {
            return <li key={item}>-{item}</li>
          })}
        </ul>

        <Secondary_ButtonCTA width="220px"
          Label={"Learn Hard Skills, my articals"} Href="/Tutor" />
      </div>
    </section>
  );
}

export default Skills;