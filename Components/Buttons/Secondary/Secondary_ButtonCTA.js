import style from "./Secondaru_ButtonCTA.module.css";
import Link from "next/link";

const Secondary_ButtonCTA = ({ Label, width, Href }) => {
  return <Link href={Href || ""}><button style={{ width: width }}
    className={style.Secondary}>{Label}</button></Link>;
};

export default Secondary_ButtonCTA;
