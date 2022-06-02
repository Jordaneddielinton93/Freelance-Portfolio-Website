import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./Folders.module.css";
import Image from "next/image";
const Folders = () => {
  return (
    <section className={style.Container}>
      <div className={style.InnerContainer}>
        <div className={style.folder_And_Button}>
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
          <Secondary_ButtonCTA Label={"click me"} />
        </div>
        <div className={style.folder_And_Button}>
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
          <Secondary_ButtonCTA Label={"click me"} />
        </div>
        <div className={style.folder_And_Button}>
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
          <Secondary_ButtonCTA Label={"click me"} />
        </div>
        <div className={style.folder_And_Button}>
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
              <h6>Freebies</h6>
              <h4>Market Place</h4>
            </div>
          </main>
          <Secondary_ButtonCTA Label={"click me"} />
        </div>
      </div>
    </section>
  );
};

export default Folders;
