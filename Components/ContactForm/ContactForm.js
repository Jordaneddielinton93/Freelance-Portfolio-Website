import style from "./ContactForm.module.css";
import Image from "next/image";
import Input_and_name from "../Inputs/Input_and_name";
import Select_and_options from "../Inputs/Select_and_options";
import React, {
  useReducer,
  createContext,
  useRef,
} from "react";
import emailjs from "emailjs-com"
import { FormReducer, inistialState } from "../01-Hooks/FormReducer";

export let FormContext = createContext(inistialState);

const ContactForm = ({ setConfirmation, setLoading }) => {
  let [state, dispatch] = useReducer(FormReducer, inistialState);
  const form = useRef();

  async function sendEmail(e) {
    e.preventDefault();
    dispatch({ type: "FormValidation" })
    setLoading(true)
    setConfirmation(true)


    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATEID, form.current, process.env.NEXT_PUBLIC_FORMID)
      .then((result) => {
        console.log(result.text);
        dispatch({ type: "Reset" })
        setLoading(false)
      }, (error) => {
        console.log(error.text);
        dispatch({ type: "Reset" })
        setLoading(false)
      });

  }
  // "https://freelance-emailer.herokuapp.com"
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form ref={form} className={style.Container} onSubmit={sendEmail}>
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
