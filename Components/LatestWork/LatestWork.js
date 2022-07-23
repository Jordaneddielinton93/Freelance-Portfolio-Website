import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./LatestWork.module.css";
import Image from "next/image";

import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";


const LatestWork = ({ latestWorkImg }) => {


  return (
    <main className={style.Container} >
      <div className={style.Container_section} data-aos="fade-right">
      <section className={style.Container_section_Left}>
        <h2 className={style.Label}>Latest Work</h2>
        <div className={style.ImageContainer} >

          {latestWorkImg && latestWorkImg.map((file, index) => {

            return (
              <div key={index} className={style.ImageBox} >
                <Image
                  style={{ position: "absolute", borderRadius: "100%" }}
                  alt="Slides"
                  layout="fill"
                  src={"https:" + file.url}
                />
              </div>)
          })}
        </div>
        <Primary_ButtonCTA Label="Projects" Href={"/Projects"} />
        
      </section>
      <section className={style.Container_section_Right}>

      </section>
      </div>
    </main>
  );
};

export default LatestWork;




{/* <span style={{ position: "absolute", right: 0, top: 0, zIndex: 1 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src="/images/leaves.png"
        />
        

      </span> */}