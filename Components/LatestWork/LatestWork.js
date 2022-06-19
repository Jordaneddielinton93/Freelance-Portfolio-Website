import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./LatestWork.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";






const LatestWork = ({ latestWorkUrls }) => {

  return (
    <section className={style.Container}>
      <h2 className={style.Label}>Latest Work</h2>
      <div className={style.ImageContainer}>
        {[...latestWorkUrls, ...latestWorkUrls, ...latestWorkUrls, ...latestWorkUrls, ...latestWorkUrls, ...latestWorkUrls, ...latestWorkUrls,].map((item, index) => {
          console.log(latestWorkUrls[index])
          return (
            <div style={{ backgroundImage: `url(${item})` }}
              key={index} className={style.ImageBox}>
            </div>
          );
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
    </section>
  );
};

export default LatestWork;
