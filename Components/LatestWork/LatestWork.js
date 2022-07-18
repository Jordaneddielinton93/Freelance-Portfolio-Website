import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./LatestWork.module.css";
import Image from "next/image";

import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";


const LatestWork = ({ latestWorkImg }) => {


  return (
    <section className={style.Container} >
      <div className={style.Container_Inner} data-aos="fade-right">
        <h2 className={style.Label}>Latest Work</h2>
        <div className={style.ImageContainer} data-aos="fade-left">

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
        {/* <span style={{ position: "absolute", right: 0, top: 0, zIndex: 1 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src="/images/backgroundFlower2.png"
        />

      </span> */}
      </div>
    </section>
  );
};

export default LatestWork;
