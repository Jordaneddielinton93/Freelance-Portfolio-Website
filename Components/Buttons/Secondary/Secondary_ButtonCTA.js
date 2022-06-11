import style from "./Secondaru_ButtonCTA.module.css";

const Secondary_ButtonCTA = ({ Label, width }) => {
  return <button style={{ width: width }}
    className={style.Secondary}>{Label}</button>;
};

export default Secondary_ButtonCTA;
