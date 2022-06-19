import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import Link from "next/link";

import style from "./Folders.module.css";
import Image from "next/image";
const Folders = () => {
  return (
    <section className={style.Container}>
      <div className={style.InnerContainer}>
        <div className={style.folder_And_Button}>
          <Link href="/About">
            <main className={style.Folder}>
              <div className={style.Folder_img}>
                <Image
                  alt="Slides"
                  src="/images/Freelance_Image1.png"
                  height="120px"
                  width="116px"
                />
              </div>
              <div className={style.Folder_Flap}>
                <h6>What I Do</h6>
                <h4>Freelance</h4>
              </div>
            </main>
          </Link>
          <Secondary_ButtonCTA Label={"About Me"} Href="/About" />
        </div>
        <div className={style.folder_And_Button}>
          <Link href="/Projects">
            <main className={style.Folder}>
              <div className={style.Folder_img}>
                <Image
                  alt="Slides"
                  src="/images/Project_Image1.png"
                  height="178px"
                  width="250px"
                />
              </div>
              <div className={style.Folder_Flap}>
                <h6>Skills</h6>
                <h4>Projects</h4>
              </div>
            </main>
          </Link>
          <Secondary_ButtonCTA Href="/Projects" Label={"My Skills"} />
        </div>
        <div className={style.folder_And_Button}>
          <Link href="/Community">
            <main className={style.Folder}>
              <div className={style.Folder_img}>
                <Image
                  alt="Slides"
                  src="/images/Community_Image1.png"
                  height="144px"
                  width="271px"
                />
              </div>
              <div className={style.Folder_Flap}>
                <h6>Groups</h6>
                <h4>Community</h4>
              </div>
            </main>
          </Link>
          <Secondary_ButtonCTA Label={"Community"} Href="/Community" />
        </div>
        <div className={style.folder_And_Button}>
          <Link href="/Tutor">
            <main className={style.Folder}>
              <div className={style.Folder_img}>
                <Image
                  alt="Slides"
                  src="/images/Project_Image1.png"
                  height="178px"
                  width="250px"
                />
              </div>
              <div className={style.Folder_Flap}>
                <h6>helping</h6>
                <h4>Tutoring</h4>
              </div>
            </main>
          </Link>
          <Secondary_ButtonCTA Label={"One to One"} Href="/Tutor" />
        </div>
      </div>
    </section>
  );
};

export default Folders;
