import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./Folders.module.css";
import Image from "next/image";
const Folders = () => {
  return (
    <section className={style.Container}>
      <div className={style.folder_And_Button}>
        <main className={style.Folder}>
          <Image
            alt="Slides"
            src="/images/Freelance_Image1.png"
            height="120px"
            width="116px"
          />
          <div className={style.Folder_Flap}>
            <h6>Mentors</h6>
            <h4>Freelance</h4>
          </div>
        </main>
        <Secondary_ButtonCTA Label={"click me"} />
      </div>
      <div className={style.folder_And_Button}>
        <main className={style.Folder}>
          <Image
            alt="Slides"
            src="/images/Project_Image1.png"
            height="158px"
            width="230px"
          />
          <div className={style.Folder_Flap}>
            <h6>Mentors</h6>
            <h4>Freelance</h4>
          </div>
        </main>
        <Secondary_ButtonCTA Label={"click me"} />
      </div>
      <div className={style.folder_And_Button}>
        <main className={style.Folder}>
          <Image
            alt="Slides"
            src="/images/Community_Image1.png"
            height="144px"
            width="271px"
          />
          <div className={style.Folder_Flap}>
            <h6>Mentors</h6>
            <h4>Freelance</h4>
          </div>
        </main>
        <Secondary_ButtonCTA Label={"click me"} />
      </div>
      <div className={style.folder_And_Button}>
        <main className={style.Folder}>
          <Image
            alt="Slides"
            src="/images/Project_Image1.png"
            height="158px"
            width="230px"
          />
          <div className={style.Folder_Flap}>
            <h6>Mentors</h6>
            <h4>Freelance</h4>
          </div>
        </main>
        <Secondary_ButtonCTA Label={"click me"} />
      </div>
    </section>
  );
};

export default Folders;
