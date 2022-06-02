import style from "./MoreAboutMe.module.css";
import Image from "next/image";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";

const MoreAboutMe = () => {
  return (
    <main className={style.Container}>
      <div className={style.Container_Inner}>
        <section className={style.Container_TopSection}>
          <article className={style.TopSection_article}>
            <h3 className={style.TopSection_article_heading}>
              Developers need more then code to make great applications
            </h3>
            <p className={style.TopSection_article_paragraph}>
              Thats why I surround myself with not just the best coders in the
              Uk but the most humble characters, who are allways ready to lend a
              hand . Constantly practicing problem solving and writing clean
              code to keep your sites up to scratch , all with a healthy dose of
              cofee.
            </p>
            <Secondary_ButtonCTA Label={"About"} />
          </article>
          <Image
            alt="Logo Inistials"
            src="/images/moreAboutMe1.png"
            width="525px"
            height={"350px"}
          />
        </section>
        <section className={style.Container_TopSection}>
          <Image
            alt="Logo Inistials"
            src="/images/moreAboutMe2.png"
            width="525px"
            height={"350px"}
          />
          <article className={style.TopSection_article}>
            <h3 className={style.TopSection_article_heading}>
              Developers need more then code to make great applications
            </h3>
            <p className={style.TopSection_article_paragraph}>
              Thats why I surround myself with not just the best coders in the
              Uk but the most humble characters, who are allways ready to lend a
              hand . Constantly practicing problem solving and writing clean
              code to keep your sites up to scratch , all with a healthy dose of
              cofee.
            </p>
            <Secondary_ButtonCTA Label={"About"} />
          </article>
        </section>
      </div>
    </main>
  );
};

export default MoreAboutMe;
