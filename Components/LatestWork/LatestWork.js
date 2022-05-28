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
                src="/images/whiteWavesTexture.jpg"
                height="130px"
                width="130px"
              />
            </div>
          );
        })}
      </div>
      <Secondary_ButtonCTA Label="Projects" />
    </section>
  );
};

export default LatestWork;
