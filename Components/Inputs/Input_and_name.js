import { useContext } from "react";
import { FormContext } from "../ContactForm/ContactForm";
import style from "./Input_and_name.module.css";
const Input_and_name = ({ label, input, type, placeholder }) => {
  let { dispatch } = useContext(FormContext);

  return (
    <div className={style.Container}>
      <label htmlFor="InputForm" className={style.Label}>
        {label}
      </label>
      <input
        onChange={(e) =>
          dispatch({ type: label.replace(/ /g, ""), payload: e.target.value })
        }
        required
        placeholder={placeholder}
        type={type}
        id="InputForm"
        className={style.Input}
      />
    </div>
  );
};

export default Input_and_name;
