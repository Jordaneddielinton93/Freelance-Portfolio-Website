import { useRef } from "react";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import style from "./BookingCard.module.css";

const BookingCard = ({ setToggleModal }) => {
  let durationRef = useRef("1hr");
  let subjectRef = useRef("Mentoring");
  console.log(durationRef.current.value);
  return (
    <main className={style.BookingCard}>
      <div className={style.BookingCard_PriceContainer}>
        <h1>
          £12.50{" "}
          <span className={style.BookingCard_PriceContainer_Perhour}>
            per hour
          </span>
        </h1>
      </div>
      <div className={style.BookingCard_Duration_and_Subject}>
        <label className={style.Label} htmlFor="cars">
          Session Duration
        </label>

        <select
          ref={durationRef}
          className={style.Select}
          name="Duration"
          id="Duration"
        >
          <option value="1hr">1 hr Tutoring</option>
          <option value="2hr">2 hr Tutoring</option>
          <option value="3hr">3 hr Tutoring</option>
          <option value="4hr">4 hr Tutoring</option>
        </select>

        <label className={style.Label} htmlFor="cars">
          Session Subject
        </label>

        <select
          ref={subjectRef}
          className={style.Select}
          name="Subject"
          id="Subject"
        >
          <option value="Mentoring">Mentoring</option>

          <option value="React">React</option>
          <option value="Javascript">Javascript</option>
          <option value="CSS">CSS</option>
        </select>
      </div>
      <button
        onClick={() =>
          setToggleModal({
            duration: durationRef.current.value,
            subject: subjectRef.current.value,
          })
        }
        className={style.Button}
      >
        Request Lesson
      </button>
    </main>
  );
};

export default BookingCard;
