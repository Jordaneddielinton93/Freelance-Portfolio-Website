import style from "./MoreAboutMe.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";

const MoreAboutMe = () => {
  return (
    <main className={style.Container}>
      <div className={style.Container_Inner}>
        <section className={style.Container_TopSection} data-aos="fade-right">
          <article className={style.TopSection_article}>
            <h3 className={style.TopSection_article_heading}>
              Developers need more then code to make great applications
            </h3>
            <p className={style.TopSection_article_paragraph}>
              Thats why I surround myself with not just the best coders in the
              Uk but the most humble characters, who are allways ready to lend a
              hand.
              <br />
              <br /> Constantly practicing problem solving and writing clean
              code to keep your sites up to scratch , all with a healthy dose of
              cofee.
            </p>
            <Primary_ButtonCTA Label={"Projects"} Href="/Projects" />
          </article>
          <Image
            alt="Logo Inistials"
            src="/images/moreAboutMe1.png"
            width="500px"
            height={"350px"}
          />
        </section>
        <section className={style.Container_TopSection} data-aos="fade-right">
          <Image
            alt="Logo Inistials"
            src="/images/moreAboutMe2.png"
            width="500px"
            height={"350px"}
          />
          <article className={style.TopSection_article}>
            <h3 className={style.TopSection_article_heading}>
              Dont go Backwards, find your feet with me.
            </h3>
            <p className={style.TopSection_article_paragraph}>
              We can all learn from each other! When you Become a developer, you
              lose access to co-workers and many social acquaintances.
              <br />
              <br /> That’s why {"it's"} important I work full time as a coach
              helping hundereds find their first feet in tech , community is
              everything.
            </p>
            <Primary_ButtonCTA Label={"Community"} Href="/Community" />
          </article>
        </section>
      </div>
    </main>
  );
};

export default MoreAboutMe;
