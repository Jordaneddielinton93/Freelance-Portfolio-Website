import style from "./BigSlateTitle.module.css";
const BigSlateTitle = ({ text }) => {
  return (
    <section className={style.Container}>
      <div className={style.Container_Background_Top}></div>
      <h1 className={style.Container_Title}>{text}</h1>
      <div className={style.Container_Background_Bottom}></div>
    </section>
  );
};

export default BigSlateTitle;
