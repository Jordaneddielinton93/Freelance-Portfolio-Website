import CanvasLayout from "../CanvasLayout/CanvasLayout";
import style from "./HomeHero.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
const HomeHero = () => {
  return (
    <main className={style.Container}>
      <div className={style.Container_Main}>
        <section className={style.Container_Main_LeftSection}>
          <h3 className={style.LeftSection_name}>Hi, Im Jordan</h3>
          <Image
            height="128px"
            width="500px"
            alt="Welcome"
            src="/images/Welcome.svg"
          />
          <Image
            height="91px"
            width="420px"
            alt="Welcome"
            src="/images/Freelance.svg"
          />
          <div style={{ height: "20%" }}>
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
