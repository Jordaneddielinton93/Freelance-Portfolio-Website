import style from "./ContactHero.module.css";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
const ContactHero = () => {
  return (
    <main className={style.Container}>
      <section className={style.Container_ContactContainer}>
        <h1>Let me know about your project</h1>
        <p>Im hear to understand exactly what you want with the time , </p>
        <p>care and patience your product needs to grow</p>
        <ContactForm />
      </section>

      <span style={{ position: "absolute", left: 0, bottom: "-4px" }}>
        <Image
          src="/images/leaves2.png"
          width="208px"
          height="263px"
          alt="Leaves"
        />
      </span>
      <span style={{ position: "absolute", right: 0, top: 0 }}>
        <Image
          src="/images/leaves.png"
          height="208px"
          width="263px"
          alt="Leaves"
        />
      </span>
    </main>
  );
};

export default ContactHero;
