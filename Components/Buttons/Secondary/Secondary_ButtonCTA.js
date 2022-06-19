import style from "./Secondaru_ButtonCTA.module.css";
import Link from "next/link";

const Secondary_ButtonCTA = ({ Label, width, Href, minWidth }) => {
  return <Link href={Href || ""}><button style={{ width: width, minWidth: minWidth }}
    className={style.Secondary}>{Label}</button></Link>;
};

export default Secondary_ButtonCTA;
