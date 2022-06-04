import React, { useContext } from "react";
import style from "../Select_and_options.module.css";
import { FormContext } from "../../ContactForm/ContactForm";
const PriceRange = () => {
  let { state, dispatch } = useContext(FormContext);

  return (
    <>
      <h1 className={style.WhatService_title}>What is your price range</h1>
      <p className={style.WhatService_paragraph}>
        This will help us guide you toward the most appropriate solution within
        your budget. Consider this a starting point to our conversation, not a
        final quote.
      </p>
      <select
        value={state.Budget}
        onChange={(e) => dispatch({ type: "Budget", payload: e.target.value })}
        className={style.Select_and_options}
        name="Project"
        id="Project"
      >
        <option value={false}>Select Your Budget</option>
        <option value="less then £1000">Less then £1000</option>
        <option value="Design & Development">£1,000 - £3,000</option>
        <option value="Design & Development">£3,000 - £5000</option>
        <option value="Design & Development">More then £5000</option>
      </select>
    </>
  );
};

export default PriceRange;
