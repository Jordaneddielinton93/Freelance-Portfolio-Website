import CanvasLayout from "../CanvasLayout/CanvasLayout";
import style from "./HomeHero.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";


const HomeHero = ({ scrollY, heading, LeftSectionIMG, RightSectionIMG, show3D, paragraph, paragraph2 }) => {

  return (
    <main className={style.Container}>
      <span style={{ position: "absolute", right: 0, top: 0, zIndex: 2 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src={"/images/leaves.png"}
        />
      </span>

      <div className={style.Container_Main}>
        <section style={{ backgroundImage: LeftSectionIMG, backgroundPosition: "center " + `-${(scrollY + 0.5 + 360)}px` }} className={style.Container_Main_LeftSection}>

          <div className={style.Title_Container} >
            <h1 className={style.Container_Main_Title}>Creativity<span>.</span> </h1>
            <h1 className={style.Container_Main_Title}>Collaboration<span>.</span></h1>
            <h1 className={style.Container_Main_Title}>Commitment</h1>
          </div>



          <h2 style={{ display: show3D && "none" }} className={style.Container_Main_Title2}>Success Starts with the Right App Developer</h2>

          <p style={{ color: show3D && "black" }} className={style.Container_Main_LeftSection_text}>
            {paragraph}
          </p>


          <div className={style.Container_Main_LeftSection_Buttons}>
            <Secondary_ButtonCTA Label="Contact" Href="/Contact" />
            <Secondary_ButtonCTA Label="About Me" Href="/About" />
          </div>
        </section>
        <section style={{ backgroundImage: RightSectionIMG }} className={style.Container_Main_RightSection}>
          {show3D && <CanvasLayout />}
        </section>
      </div>
    </main>
  );
};

export default HomeHero;
