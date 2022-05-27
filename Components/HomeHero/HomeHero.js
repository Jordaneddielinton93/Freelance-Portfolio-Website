import style from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <main className={style.Container}>
      <div className={style.Container_Main}>
        <section className={style.Container_Main_LeftSection}></section>
        <section className={style.Container_Main_RightSection}></section>
      </div>
    </main>
  );
};

export default HomeHero;
