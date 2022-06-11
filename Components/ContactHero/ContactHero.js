import style from "./ContactHero.module.css";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
const ContactHero = ({ setConfirmation }) => {
  return (
    <main className={style.Container}>

      <section className={style.Container_ContactContainer}>
        <h1 className={style.Container_ContactContainer_title}>
          Let me know about your project
        </h1>
        <p className={style.Container_ContactContainer_SubHeading}>
          Im hear to understand exactly what you want with the time ,{" "}
        </p>
        <p className={style.Container_ContactContainer_SubHeading}>
          care and patience your product needs to grow
        </p>
        <ContactForm setConfirmation={setConfirmation} />
      </section>

      <span style={{ position: "absolute", left: 0, bottom: "-4px" }}>
        <Image
          src="/images/leaves2.png"
          width="158px"
          height="213px"
          alt="Leaves"
        />
      </span>
      <span style={{ position: "absolute", right: 0, top: 0 }}>
        <Image
          src="/images/leaves.png"
          height="158px"
          width="213px"
          alt="Leaves"
        />
      </span>
    </main>
  );
};

export default ContactHero;
