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
          <PricingCard data-aos="fade-right"
            heading={"Freelance Design"}
            subheading={"web dev"}
            img={"/images/PricingCard1.png"}
            bodyText1={"Want a full web based application designed & created"}
            bodyText2={"Want a web site refresh , rebrand or UX-Discovery."}
            bodyText3={
              "Want your site to come to life with sutble animations ?."
            }
          />
          <PricingCard
            heading={"Helping-hand"}
            subheading={"One-To-One"}
            img={"/images/PricingCard2.png"}
            underlineColor={"orange"}
            bodyText1={
              "Want Help re-skilling to a new career in web development"
            }
            bodyText2={"Want a porfolio created or help creating one"}
            bodyText3={
              "Want help in a specific area, Front-end , backend or UX-UI"
            }
          />
          <PricingCard
            heading={"brand Reach"}
            subheading={"Advertisement"}
            img={"/images/PricingCard3.png"}
            underlineColor={"red"}
            bodyText1={"Like a feature on my site for a small fee "}
            bodyText2={"Like to become a sponsor? dont hold back contact me"}
            bodyText3={
              "Want help in a specific area .Front-end , backend or UX-UI"
            }
          />
        </section>
      </div>
    </main>
  );
};

export default HowICanHelp;
