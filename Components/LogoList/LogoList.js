import Image from "next/image";
import style from "./LogoList.module.css";
const LogoList = () => {
  return (
    <section className={style.Container}>
      <Image
        height="70px"
        width="85px"
        alt="Initials"
        src="/images/LogoInistials.svg"
      />
      <Image
        height="70px"
        width="85px"
        alt="Initials"
        src="/images/LogoInistials.svg"
      />
      <Image
        height="70px"
        width="85px"
        alt="Initials"
        src="/images/LogoInistials.svg"
      />
      <Image
        height="70px"
        width="85px"
        alt="Initials"
        src="/images/LogoInistials.svg"
      />
    </section>
  );
};

export default LogoList;
