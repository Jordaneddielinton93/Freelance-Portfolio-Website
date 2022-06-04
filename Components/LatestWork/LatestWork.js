import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./LatestWork.module.css";
import Image from "next/image";

const LatestWork = () => {
  let Arr = [...".".repeat(10)];
  return (
    <section className={style.Container}>
      <h2 className={style.Label}>Latest Work</h2>
      <div className={style.ImageContainer}>
        {Arr.map((item, index) => {
          return (
            <div key={index} className={style.ImageBox}>
              <Image
                style={{ position: "absolute" }}
                alt="Slides"
                layout="fill"
                src="/images/whiteWavesTexture.jpg"
              />
            </div>
          );
        })}
      </div>
      <Secondary_ButtonCTA Label="Projects" />
      <span style={{ position: "absolute", right: 0, top: 0, zIndex: 1 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src="/images/backgroundFlower2.png"
        />
      </span>
    </section>
  );
};

export default LatestWork;
