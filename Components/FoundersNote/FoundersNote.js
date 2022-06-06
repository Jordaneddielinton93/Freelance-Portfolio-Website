import style from "./FoundersNote.module.css";
import Image from "next/image";

const FoundersNote = () => {
  return (
    <main className={style.Container}>
      <div className={style.Container_Inner}>
        <h1 className={style.Container_Inner_label}>Need more convincing?</h1>
        <div className={style.Slate}>
          <article className={style.Slate_Article}>
            <div className={style.Slate_Article_Content}>
              <h3>
                My main mission is to help and to grow along with that journey
              </h3>
              <p>
                Im trying to make this world great as a fellow colleague once
                told me ,Dont be afraid of taking small steps be afraid of
                standing still , we all grow at different paces so keep growing{" "}
              </p>
            </div>
            <Image
              alt="Logo Inistials"
              src="/images/greyBack.png"
              width="70px"
              height={"70px"}
            />
          </article>
        </div>
        <h1 className={style.Footer_title}>Ready to join the fun?</h1>
        <div className={style.Footer_container}>
          <section></section>
          <section></section>
        </div>
      </div>
      <section className={style.Container_TopBckGround}></section>
      <section className={style.Container_BottomBckGround}></section>
    </main>
  );
};

export default FoundersNote;
