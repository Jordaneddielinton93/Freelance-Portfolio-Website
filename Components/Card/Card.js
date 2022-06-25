import style from "./Card.module.css"
import Image from "next/image"
import Link from "next/link";
const Card = ({ Title, img, readTime, carddiscription, slug }) => {


  return (
    <Link href={"/Articles/" + slug}>
      <article className={style.Card} style={{ backgroundImage: `url(https:${img})` }}>
        <section className={style.Card_infoBox}>
          <div className={style.Card_infoBox_img}>
            <Image src={"/images/greyback.png"} width="70px" height="70px" alt="Card img" />
          </div>
          <h4 className={style.Card_infoBox_content}>{Title}</h4>
          <h6 className={style.Card_ReadTime}>Read Time: {readTime}mins</h6>
          <p className={style.Card_Discript}>{carddiscription.slice(0, 50)}... <br /> <span>read-more</span> </p>

          <div className={style.Card_Discript_full}>
            <h3>{Title}</h3>
            {carddiscription}
          </div>
        </section>
      </article>
    </Link>
  );
}

export default Card;