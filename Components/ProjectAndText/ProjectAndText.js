import BigSlateTitle from "../BigSlateTitle/BigSlateTitle";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import Phone1 from "../PhoneShell/Phone1";
import style from "./ProjectAndText.module.css"
const ProjectAndText = ({ projects, direction, slateText, img1, img2, img3, img4, img5 }) => {
  return (
    <main className={style.container} data-aos="fade-right">
      <div style={{ flexDirection: direction }} className={style.Project1}>
        <section className={style.LeftSection}>
          <Phone1
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
          />
        </section>
        <section className={style.RightSection}>
          <BigSlateTitle text={slateText} />
          <article className={style.RightSection_Article}>
            <p>{projects.paragraph1}</p>
            <p>{projects.paragraph2}</p>
            <p>{projects.paragraph3}</p>
            <p>{projects.paragraph4}</p>
          </article>
          <Secondary_ButtonCTA Label={"Go To Site"} />
        </section>
      </div>
    </main>
  );
}

export default ProjectAndText;