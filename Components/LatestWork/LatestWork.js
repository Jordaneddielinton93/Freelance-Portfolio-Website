import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import style from "./LatestWork.module.css";
import Image from "next/image";

import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import TestimonialImageComp from "../ImageComponent/TestimonialImageComp";


const LatestWork = ({ latestWorkImg }) => {


  return (
    <main className={style.Container} >
      <div className={style.Container_section}>
        <section className={style.Container_section_Left}>
          <div className={style.Label}>
            <h2>Latest</h2>
            <p>A collection of my work, dedicated to you</p>
          </div>
          <div className={style.ImageContainer} >

            {latestWorkImg && latestWorkImg.map((file, index) => {

              return index<5&& (
                <div key={index} className={style.ImageBox} >
                  <Image
                    style={{ position: "absolute", borderRadius: "10px" }}
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
          <TestimonialImageComp src={"/images/testimonials/Testimonial3.png"} top="2%" right="2%" />
          <TestimonialImageComp src={"/images/testimonials/Testimonial4.png"} top="25%" right="50%" delay={"1s"} />
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