import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./LatestWork.module.css";
import Image from "next/image";
import Plantpot from "../Animations/Plantpot/Plantpot";


const LatestWork = ({ latestWorkImg }) => {


  return (
    <section className={style.Container} >
      <h2 className={style.Label}>Latest Work</h2>
      <div className={style.ImageContainer}>

        {latestWorkImg && latestWorkImg.map((file, index) => {
          console.log(file.url)
          return (
            <div key={index} className={style.ImageBox} data-aos="fade-right">
              <Image
                style={{ position: "absolute" }}
                alt="Slides"
                layout="fill"
                src={"https:" + file.url}
              />
            </div>)
        })}
      </div>
      <Secondary_ButtonCTA Label="Projects" Href={"/Projects"} />
      <span style={{ position: "absolute", right: 0, top: 0, zIndex: 1 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src="/images/backgroundFlower2.png"
        />

      </span>
      <Plantpot />
    </section>
  );
};

export default LatestWork;
