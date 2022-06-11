import style from "./ContactForm.module.css";
import Image from "next/image";
import Input_and_name from "../Inputs/Input_and_name";
import Select_and_options from "../Inputs/Select_and_options";
import React, {

  useReducer,
  createContext,
} from "react";

import { FormReducer, inistialState } from "../01-Hooks/FormReducer";

export let FormContext = createContext(inistialState);

const ContactForm = ({ setConfirmation }) => {
  let [state, dispatch] = useReducer(FormReducer, inistialState);

  async function sendEmail(e) {
    e.preventDefault();
    // dispatch({ type: "FormValidation" })
    console.log(state);

    try {
      let response = await fetch("https://freelance-emailer.herokuapp.com/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(state),
      });
      let resData = await response.json();
      console.log(resData)
      dispatch({ type: "Reset" })
      setConfirmation(true)
      // setData(resData);
    } catch (error) { }
  }

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form className={style.Container} onSubmit={(e) => sendEmail(e)}>
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
            What do you need from me?
          </h3>
          <p className={style.SelectProduct_paragraph}>
            This will help me understand the fundemental needs of you product
            and get the right time duration for the project , budget and or
            service in mind.
          </p>
          <Select_and_options />
        </section>
        {/*  */}
        <section className={style.NameEmail}>
          <Input_and_name
            placeholder="Your Name"
            type="text"
            label="Full name"
            value={state.Fullname}
          />
          <Input_and_name
            placeholder="YourEmail@Email.com"
            type="email"
            label="Email"
            value={state.Email}
          />

          <button className={style.Submit}

          >Submit</button>
        </section>
      </form>
    </FormContext.Provider>
  );
};

export default ContactForm;
