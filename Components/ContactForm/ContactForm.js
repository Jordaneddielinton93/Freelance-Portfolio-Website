import style from "./ContactForm.module.css";
import Image from "next/image";
import Input_and_name from "../Inputs/Input_and_name";
import Select_and_options from "../Inputs/Select_and_options";
import React, { useState, useEffect, useReducer, createContext } from "react";
import { FormReducer, inistialState } from "../01-Hooks/FormReducer";
// plan.
// pick one of 4 options and set object to false, beside the option chosen
//  option-1:website
//   True: Give option of develop or design & Develop
//   if true:
//       give estimate price value (per-project):
//   if true:
//       time of completion

export let FormContext = createContext(inistialState);

const ContactForm = () => {
  let [service, setService] = useState("");

  let [state, dispatch] = useReducer(FormReducer, inistialState);
  console.log(state);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form className={style.Container}>
        <header className={style.Container_Header}>
          <span>
            <Image
              alt="Logo Home"
              src="/images/greyback.png"
              width="68px"
              height="68px"
            />
          </span>
          <div className={style.Container_Content}>
            <h5 className={style.Container_Content_title}>
              Hey, im Jordan Linton !
            </h5>
            <p className={style.Container_Content_paragraph}>
              Im a Full stack web developer, I spend my whole day , practically
              everyday learning new Technologies and creating beautiful
              responsive web apps/sites.
            </p>
          </div>
        </header>
        <section className={style.SelectProduct}>
          <h3 className={style.SelectProduct_title}>
            What do you need from me ?
          </h3>
          <p className={style.SelectProduct_paragraph}>
            This will help me understand the fundemental needs of you product
            and get the right time duration for the project , budget and or
            service in mind.
          </p>
          <Select_and_options service={service} setService={setService} />
        </section>
        {/*  */}
        <section className={style.NameEmail}>
          <Input_and_name
            placeholder="Your Name"
            type="text"
            label="Full name"
          />
          <Input_and_name
            placeholder="YourEmail@Email.com"
            type="email"
            label="Email"
          />

          <button className={style.Submit}>Submit</button>
        </section>
      </form>
    </FormContext.Provider>
  );
};

export default ContactForm;
