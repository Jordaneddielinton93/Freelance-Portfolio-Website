import CanvasLayout from "../CanvasLayout/CanvasLayout";
import style from "./HomeHero.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import { WelcomeSvg } from "../SVG/Welcome";
const HomeHero = () => {
  return (
    <main className={style.Container}>
      <span style={{ position: "absolute", right: 0, top: 0, zIndex: 2 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src="/images/leaves.png"
        />
      </span>
      <div className={style.Container_Main}>
        <section className={style.Container_Main_LeftSection}>
          {WelcomeSvg}
          {/* <Image
            height="91px"
            width="420px"
            alt="Welcome"
            src="/images/Freelance.svg"
          /> */}
          <p className={style.Container_Main_LeftSection_text}>
            I’m a Front-end web developer who turned years of coding into a
            full-time career, and recently into my freelancing journey. I help
            teach hundreds of student how to find their own version of success
            through my articles, newsletter, products, and freelance community.
          </p>

          <div className={style.Container_Main_LeftSection_Buttons}>
            <Secondary_ButtonCTA Label="Contact" Href="/Contact" />
            <Secondary_ButtonCTA Label="About Me" Href="/About" />
          </div>
        </section>
        <section className={style.Container_Main_RightSection}>
          {/* <CanvasLayout /> */}
        </section>
      </div>
    </main>
  );
};

export default HomeHero;
