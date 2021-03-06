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
    <article className={style.Card} data-aos="zoom-in-right" >
      <div className={style.Card_img}>
        <Image src={img} alt="Pricing Card" layout="fill" />
      </div>
      <section className={style.Card_content}>
        <div className={style.Card_content_head}>
          <h5 className={style.Card_content_head_subtext}>{subheading}</h5>
          <div className={style.Card_content_head_text}>
            <h1 className={style.Card_content_head_text_label}>{heading}</h1> 
          </div>
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
              color: "white",
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
              color: "white",
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
              color: "white",
              paddingRight: "5px",
            }}
          />
          <p>{bodyText3}</p>
        </div>
        <Secondary_ButtonCTA Label={"Contact"} Href="/Contact" />
      </section>
    </article >
  );
};

export default PricingCard;
