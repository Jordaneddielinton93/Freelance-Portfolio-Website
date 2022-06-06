import React, { useContext } from "react";
import style from "../Select_and_options.module.css";
import { FormContext } from "../../ContactForm/ContactForm";
const DesignAndDev = () => {
  let { state, dispatch } = useContext(FormContext);

  return (
    <React.Fragment>
      <h1 className={style.WhatService_title}>What Type of site do you want</h1>
      <p className={style.WhatService_paragraph}>
        Please specify the type level of completion {"you'd"} like me to deliver
        on this project.
      </p>
      <select style={{ cursor: "pointer" }}
        required
        value={state.DevOrDeisgnAndDev}
        onChange={(e) =>
          dispatch({ type: "DevOrDeisgnAndDev", payload: e.target.value })
        }
        className={style.Select_and_options}
        name="Project"
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
