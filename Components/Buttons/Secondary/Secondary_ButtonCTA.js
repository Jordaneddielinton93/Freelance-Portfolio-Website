import style from "./Secondaru_ButtonCTA.module.css";

const Secondary_ButtonCTA = ({ Label }) => {
  return <button className={style.Secondary}>{Label}</button>;
};

export default Secondary_ButtonCTA;
