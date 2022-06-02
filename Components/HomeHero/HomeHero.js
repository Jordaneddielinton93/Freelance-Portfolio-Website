import CanvasLayout from "../CanvasLayout/CanvasLayout";
import style from "./HomeHero.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import { WelcomeSvg } from "../SVG/Welcome";
const HomeHero = () => {
  return (
    <main className={style.Container}>
      <span style={{ position: "absolute", right: 0, top: 0, zIndex: 1 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src="/images/backgroundFlower2.png"
        />
      </span>
      <div className={style.Container_Main}>
        <section className={style.Container_Main_LeftSection}>
          <h3 className={style.LeftSection_name}>Hi, Im Jordan</h3>
          {WelcomeSvg}
          <Image
            height="91px"
            width="420px"
            alt="Welcome"
            src="/images/Freelance.svg"
          />
          <div style={{ height: "20%", marginTop: "80px" }}>
            <Secondary_ButtonCTA Label="Contact" />
            <Secondary_ButtonCTA Label="About Me" />
          </div>
        </section>
        <section className={style.Container_Main_RightSection}>
          <CanvasLayout />
        </section>
      </div>
    </main>
  );
};

export default HomeHero;
