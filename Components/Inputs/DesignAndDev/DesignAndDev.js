import React, { useContext } from "react";
import style from "../Select_and_options.module.css";
import { FormContext } from "../../ContactForm/ContactForm";
const DesignAndDev = () => {
  let { state, dispatch } = useContext(FormContext);
  let green = "solid 3px #23C7A7"
  let yellow = "solid thin red"
  return (
    <React.Fragment>
      <h1 className={style.WhatService_title}>What Type of site do you want</h1>
      <p className={style.WhatService_paragraph}>
        Please specify the type level of completion {"you'd"} like me to deliver
        on this project.
      </p>
      <select style={{ cursor: "pointer", border: state.DevOrDeisgnAndDev.length ? green : yellow }}
        required
        value={state.DevOrDeisgnAndDev}
        onChange={(e) =>
          dispatch({ type: "DevOrDeisgnAndDev", payload: e.target.value })
        }
        className={style.Select_and_options}
        name="DevOrDeisgnAndDev"
        id="Project"
      >
        <option value="">Select Design or Development</option>
        <option value="Development">Development</option>
        <option value="Design & Development">Design & Development</option>
      </select>
    </React.Fragment>
  );
};

export default DesignAndDev;
