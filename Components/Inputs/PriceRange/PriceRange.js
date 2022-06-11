import React, { useContext } from "react";
import style from "../Select_and_options.module.css";
import { FormContext } from "../../ContactForm/ContactForm";
const PriceRange = () => {
  let { state, dispatch } = useContext(FormContext);
  let green = "solid 3px #23C7A7"
  let yellow = "solid thin red"
  return (
    <>
      <h1 className={style.WhatService_title}>What is your price range</h1>
      <p className={style.WhatService_paragraph}>
        This will help me guide you toward the most appropriate solution within
        your budget. Consider this a starting point to our conversation, not a
        final quote.
      </p>
      <select style={{ cursor: "pointer", border: state.Budget.length ? green : yellow }}
        required
        value={state.Budget}
        onChange={(e) => dispatch({ type: "Budget", payload: e.target.value })}
        className={style.Select_and_options}
        name="Project"
        id="Project"
      >
        <option value="">Select Your Budget</option>
        <option value="Less then £1000">Less then £1000</option>
        <option value="£1,000 - £3,000">£1,000 - £3,000</option>
        <option value="£3,000 - £5000">£3,000 - £5000</option>
        <option value="More then £5000">More then £5000</option>
      </select>
    </>
  );
};

export default PriceRange;
