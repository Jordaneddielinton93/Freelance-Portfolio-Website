import style from "./PricingCard.module.css";
import Image from "next/image";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
const PricingCard = () => {
  return (
    <article className={style.Card}>
      <div className={style.Card_img}>
        <Image
          src="/images/PricingCard1.png"
          alt="Pricing Card"
          width="310px"
          height="126px"
        />
      </div>
      <section className={style.Card_content}>
        <div className={style.Card_content_head}>
          <h5 className={style.Card_content_head_subtext}>web dev</h5>
          <h1 className={style.Card_content_head_text}>Freelance Design</h1>
          <div className={style.Card_content_head_underline}></div>
        </div>

        <Secondary_ButtonCTA Label={"Contact"} />
      </section>
    </article>
  );
};

export default PricingCard;
