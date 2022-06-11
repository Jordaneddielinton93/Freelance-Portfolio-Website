import { useContext } from "react";
import { FormContext } from "../../ContactForm/ContactForm";
import style from "../Select_and_options.module.css";

const TimeLine = () => {
  let { state, dispatch } = useContext(FormContext);
  let green = "solid 3px #23C7A7"
  let yellow = "solid thin red"
  return (
    <>
      <h1 className={style.WhatService_title}>When is your expected time line?
      </h1>
      <p className={style.WhatService_paragraph}>
        Select the option that best expresses your expectations for the timeline of this project.

      </p>
      <select style={{ cursor: "pointer", border: state.Timeline.length ? green : yellow }}
        required
        value={state.Timeline}
        onChange={(e) => dispatch({ type: "Timeline", payload: e.target.value })}
        className={style.Select_and_options}
        name="Project"
        id="Project"
      >
        <option value="">Select Time of Completion</option>
        <option value="less then 1 Month">Less then 1 Month</option>
        <option value="1-2 months">1-2 months</option>
        <option value="2-3 months">2-3 months</option>
        <option value="3-6 months">3-6 months</option>
        <option value="6 months +">6 months +</option>
      </select>
    </>
  );
}

export default TimeLine;