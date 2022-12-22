import Image from "next/image";
import style from "./LogoList.module.css";
const LogoList = () => {
  return (
    <section className={style.Container}>
      <span style={{ position: "absolute", left: 0 }}>
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src="/images/leaves2.png"
        />
      </span>
      <span
        style={{
          position: "absolute",
          display: "flex",
          right: 0,
          transform: "scaleX(-1)",
        }}
      >
        <Image
          height="159px"
          width="131px"
          alt="Initials"
          src="/images/leaves2.png"
        />
      </span>
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
