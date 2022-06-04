import style from "./Contact.module.css";
import Image from "next/image";

const ContactForm = () => {
  return (
    <form className={style.Container}>
      <header className={style.Container_Header}>
        <span>
          <Image
            alt="Logo Home"
            src="/images/greyback.png"
            width="68px"
            height="68px"
          />
        </span>
        <div className={style.Container_Content}>
          <h5 className={style.Container_Content_title}>
            Hey, im Jordan Linton !
          </h5>
          <p className={style.Container_Content_paragraph}>
            Im a Full stack web developer, I spend my whole day , practically
            everyday learning new Technologies and creating beautiful responsive
            web apps/sites.
          </p>
        </div>
      </header>
      <section className={style.SelectProduct}>
        <h3 className={style.SelectProduct_title}>
          What type of help do you need with ?
        </h3>
        <p className={style.SelectProduct_paragraph}>
          This will help me understand the fundemental needs of you product and
          get the right time duration for the project and budget in mind.
        </p>
        <select className={style.ProjectType} name="Project" id="Project">
          <option value="type">Select your Project Type</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </section>
      {/*  */}
      <section className={"style"}>
        <div>
          <label htmlFor="Fullname">Full Name</label>
          <input type="text" id="Fullname" />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" />
        </div>

        <input type="submit" />
      </section>
    </form>
  );
};

export default ContactForm;
