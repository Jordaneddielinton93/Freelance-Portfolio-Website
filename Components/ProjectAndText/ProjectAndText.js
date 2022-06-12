import BigSlateTitle from "../BigSlateTitle/BigSlateTitle";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import Phone1 from "../PhoneShell/Phone1";
import style from "./ProjectAndText.module.css"
const ProjectAndText = ({ direction, slateText, img1, img2, img3, img4, img5 }) => {
  return (
    <main className={style.container}>
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
            <p>As a Web Developer I spend my whole day , practically everyday learning new Technologies and creating beautiful responsive web application and websites.</p>
            <p>I learnt the Key skills needed to become a front-end developer from school of code bootcamp , we were regulary paired into {`group's`} and were given {"project's"} to learn new skills such as responsivenes, {"Api's"} , HTML/CSS and Javascript frameworks
            </p>
            <p>I then joined the team of school of code as an Assistant Coach to help the next cohorts along , the month prior to joining i began learning backend to get the full stack view of how web-development worked.</p>
            <p>2 Years since i started coding i have now began to use my skills to help out my local community buidling website’s for family and friends doing free lance work.</p>
          </article>
          <Secondary_ButtonCTA Label={"Go To Site"} />
        </section>
      </div>
    </main>
  );
}

export default ProjectAndText;