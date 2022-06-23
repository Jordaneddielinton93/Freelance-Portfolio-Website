import style from "./Card.module.css"
import Image from "next/image"
const Card = ({ Title, img }) => {


  return (
    <article className={style.Card} style={{ backgroundImage: `url(https:${img})` }}>
      <section className={style.Card_infoBox}>
        <div className={style.Card_infoBox_img}>
          <Image src={"/images/greyback.png"} width="70px" height="70px" alt="Card img" />
        </div>
        <h4 className={style.Card_infoBox_content}>{Title}</h4>
        <h4>Author</h4>
        <h4>Extra</h4>


      </section>
    </article>
  );
}

export default Card;