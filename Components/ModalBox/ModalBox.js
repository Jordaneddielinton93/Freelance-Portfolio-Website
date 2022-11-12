import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import styles from "./ModalBox.module.css";
import { BsFillXCircleFill } from "react-icons/bs";

import { InlineWidget } from "react-calendly";
import DropDown from "../DropDown/DropDown";
const ModalBox = ({ duration, closeModal }) => {
  if (!duration) {
    return <></>;
  }

  console.log(duration, "rendered");
  return (
    <div className={styles.Container}>
      {/* <span className={styles.Container_Cross}> */}
      <BsFillXCircleFill
        className={styles.Container_Cross}
        onClick={closeModal}
      />
      {duration == "1hr" && (
        <InlineWidget url="https://calendly.com/jordan-eddie-linton/tutoring-1-hour" />
      )}
      {duration == "2hr" && (
        <InlineWidget url="https://calendly.com/jordan-eddie-linton/tutoring" />
      )}
      {duration == "3hr" && (
        <InlineWidget url="https://calendly.com/jordan-eddie-linton/tutoring-3-hours" />
      )}
      {duration == "4hr" && (
        <InlineWidget url="https://calendly.com/jordan-eddie-linton/tutoring-4-hours" />
      )}
    </div>
  );
};

export default ModalBox;
