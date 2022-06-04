import DesignAndDev from "./DesignAndDev/DesignAndDev";
import style from "./Select_and_options.module.css";
import React, { useContext } from "react";
import { FormContext } from "../ContactForm/ContactForm";
import PriceRange from "./PriceRange/PriceRange";
const Select_and_options = ({ service, setService }) => {
  let { state, dispatch } = useContext(FormContext);

  return (
    <>
      <select
        value={state.ProjectType}
        onChange={(e) =>
          dispatch({ type: "ProjectType", payload: e.target.value })
        }
        className={style.Select_and_options}
        name="Project"
        id="Project"
      >
        <option value={false}>Select Your Service Type</option>
        <option value="Website">Website</option>
        <option value="Tutoring">Tutoring</option>
        <option value="Sponsor">Sponsor</option>
        <option value="Article">Add Article</option>
      </select>
      {state.ProjectType == "Website" && <DesignAndDev />}
      {state.ProjectType !== "false" && <PriceRange />}
    </>
  );
};

export default Select_and_options;
