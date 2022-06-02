import PricingCard from "../PricingCard/PricingCard";
import style from "./HowICanHelp.module.css";

const HowICanHelp = () => {
  return (
    <main className={style.Container}>
      <div className={style.InnerContainer}>
        <section className={style.TopContainer}>
          <h5 className={style.TopContainer_Label1}>READY FOR YOUR PATH</h5>
          <h1 className={style.TopContainer_Label2}>How I Can Help You</h1>
          <h2 className={style.TopContainer_Label3}>
            Knowing I can help you pick your digital dream is <br /> everything
            to me
          </h2>
        </section>
        <section className={style.BottomContainer}>
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </section>
      </div>
    </main>
  );
};

export default HowICanHelp;
