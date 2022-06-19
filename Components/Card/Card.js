import style from "./Card.module.css"
import Image from "next/image"
const Card = ({ attributes }) => {


  return (
    <article className={style.Card}>
      <section className={style.Card_infoBox}>
        <div className={style.Card_infoBox_img}>
          <Image src={"/images/greyback.png"} width="70px" height="70px" alt="Card img" />
        </div>
        <h4>Title: {"Card_Title"}</h4>
        <h4>Author: {"Card_Painter"}</h4>
        <h4>Extra: {"Card_Price"}</h4>


      </section>
    </article>
  );
}

export default Card;