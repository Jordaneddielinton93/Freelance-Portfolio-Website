import style from "./Input_and_name.module.css";
const Input_and_name = ({ label, input, type, placeholder }) => {
  return (
    <div className={style.Container}>
      <label htmlFor="Fullname" className={style.Label}>
        {label}
      </label>
      <input
        required
        placeholder={placeholder}
        type={type}
        id="Fullname"
        className={style.Input}
      />
    </div>
  );
};

export default Input_and_name;
