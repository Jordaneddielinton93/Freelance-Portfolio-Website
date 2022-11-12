import CanvasLayout from "../CanvasLayout/CanvasLayout";
import style from "./TutorHero.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import TestimonialImageComp from "../ImageComponent/TestimonialImageComp";
import Circle from "../Shapes/Circle";
import BookingCard from "../BookingCard/BookingCard";

const TutorHero = ({ setToggleModal }) => {
  return (
    <main className={style.Container}>
      <span style={{ position: "absolute", right: 0, top: 0, zIndex: 2 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src={"/images/leaves.png"}
        />
      </span>

      <div className={style.Container_Main}>
        <section
          style={{ backgroundImage: "/images/dotted-bg.jpeg" }}
          className={style.Container_Main_LeftSection}
        >
          <div className={style.Title_Container}>
            <h1 className={style.Container_Main_Title}>
              Tutoring<span>.</span>{" "}
            </h1>
            <h1 className={style.Container_Main_Title}>
              Mentoring<span>.</span>
            </h1>
            <h1 className={style.Container_Main_Title}>
              <span>Consulting.</span>
            </h1>
          </div>

          <h2 className={style.Container_Main_Title2}>
            The best trained coach and mentor in Wolverhampton
          </h2>

          <p className={style.Container_Main_LeftSection_text}>
            {
              "I will guide and mold your desired career in web-development, showing you a deeper knowledge behind Javascript and React"
            }
          </p>

          <div className={style.Container_Main_LeftSection_Buttons}>
            <Primary_ButtonCTA Label="Contact" Href="/Contact" />
          </div>
        </section>
        <section className={style.Container_Main_RightSection}>
          <BookingCard setToggleModal={setToggleModal} />
          <Circle top="50px" left="100px" />
          <Circle top="500px" left="100px" />
          <Circle top="-50px" right="-50px" />
          {
            <TestimonialImageComp
              src={"/images/testimonials/Testimonial1.png"}
              top="10%"
              right="10%"
              delay={"2s"}
            />
          }
          {
            <TestimonialImageComp
              src={"/images/testimonials/Testimonial2.png"}
              top="55%"
              right="65%"
            />
          }
        </section>
      </div>
    </main>
  );
};

export default TutorHero;
