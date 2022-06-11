import style from "./AboutMe.module.css"
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA"
const AboutMe = () => {
  return (<main className={style.Container}>
    <article className={style.Container_Main}>
      <section className={style.Container_Main_LeftSection}>
        <h1>About Me</h1>
        <p>As a Web Developer I spend my whole day , practically everyday learning new Technologies and creating beautiful responsive web application and websites.</p>
        <p>I learnt the Key skills needed to become a front-end developer from school of code bootcamp , we were regulary paired into {"group's"} and were given {`project's`} to learn new skills such as responsivenes, {"Api's"} , HTML/CSS and Javascript frameworks
        </p>
        <p>I then joined the team of school of code as an Assistant Coach to help the next cohorts along , the month prior to joining i began learning backend to get the full stack view of how web-development worked.</p>
        <p>2 Years since i started coding i have now began to use my skills to help out my local community buidling website’s for family and friends doing free lance work, check them out</p>

        <Secondary_ButtonCTA Label="Portfolio" />
      </section>
      <section className={style.Container_Main_RightSection}></section>
    </article>
  </main>);
}

export default AboutMe;