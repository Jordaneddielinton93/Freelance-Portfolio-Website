import DesignAndDev from "./DesignAndDev/DesignAndDev";
import style from "./Select_and_options.module.css";
import React, { useContext } from "react";
import { FormContext } from "../ContactForm/ContactForm";
import PriceRange from "./PriceRange/PriceRange";
import TimeLine from "./Timeline/Timeline";
const Select_and_options = () => {
  let { state, dispatch } = useContext(FormContext);
  let green = "solid 3px #23C7A7"
  let yellow = "solid thin red"
  return (
    <>
      <select style={{ cursor: "pointer", border: state.ProjectType.length ? green : yellow }}
        required
        value={state.ProjectType}
        onChange={(e) =>
          dispatch({ type: "ProjectType", payload: e.target.value })
        }
        className={style.Select_and_options}
        name="Project"
        id="Project"
      >
        <option value="">Select Your Service Type</option>
        <option value="Website">Website</option>
        <option value="Tutoring">Tutoring</option>
        <option value="Sponsor">Sponsor</option>
        <option value="Article">Add Article</option>
      </select>
      {state.ProjectType == "Website" && <DesignAndDev />}
      {state.ProjectType !== "" && state.ProjectType !== "Article" && (
        <PriceRange />
      )}
      {(state.ProjectType == "Website" || state.ProjectType == "Tutoring") && <TimeLine />}
    </>
  );
};

export default Select_and_options;
