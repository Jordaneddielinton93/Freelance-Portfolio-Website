import style from "./PricingCard.module.css";
import Image from "next/image";
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA";
import { BsArrowRight } from "react-icons/bs";
const PricingCard = ({
  subheading,
  heading,
  img,
  underlineColor,
  bodyText1,
  bodyText2,
  bodyText3,
}) => {
  return (
    <article className={style.Card}>
      <div className={style.Card_img}>
        <Image src={img} alt="Pricing Card" width="310px" height="126px" />
      </div>
      <section className={style.Card_content}>
        <div className={style.Card_content_head}>
          <h5 className={style.Card_content_head_subtext}>{subheading}</h5>
          <h1 className={style.Card_content_head_text}>{heading}</h1>
          <span
            className={style.Card_content_head_underline}
            style={{ borderColor: underlineColor }}
          ></span>
        </div>
        <div className={style.Card_content_body}>
          <BsArrowRight
            style={{
              fontSize: "20px",
              minWidth: "25px",
              height: "36px",
              color: "#525C66",
              paddingRight: "5px",
            }}
          />

          <p>{bodyText1}</p>
        </div>
        <div className={style.Card_content_body}>
          <BsArrowRight
            style={{
              fontSize: "20px",
              minWidth: "25px",
              height: "36px",
              color: "#525C66",
              paddingRight: "5px",
            }}
          />
          <p>{bodyText2}</p>
        </div>
        <div className={style.Card_content_body}>
          <BsArrowRight
            style={{
              fontSize: "20px",
              minWidth: "25px",
              height: "36px",
              color: "#525C66",
              paddingRight: "5px",
            }}
          />
          <p>{bodyText3}</p>
        </div>
        <Secondary_ButtonCTA Label={"Contact"} />
      </section>
    </article>
  );
};

export default PricingCard;
