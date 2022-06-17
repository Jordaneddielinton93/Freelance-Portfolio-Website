import style from "./Card.module.css"
import Image from "next/image"
const Card = ({ attributes }) => {

  // let { Card_Painter, Card_Price, Card_Title } = attributes
  // let img = "http://localhost:1337" + attributes.Card_Image.data[0].attributes.url
  return (
    <article className={style.Card}
      style={{ backgroundImage: `url(/images/whiteMarbleTexture.jpg)`, backgroundSize: "cover" }}
    >
      <section className={style.Card_infoBox}>
        <div className={style.Card_infoBox_img}>
          <Image src={"/navLogo.png"} width="70px" height="70px" alt="Card img" />
        </div>
        <h4>Title: {"Card_Title"}</h4>
        <h4>Author: {"Card_Painter"}</h4>
        <h4>Price: {"Card_Price"}</h4>


      </section>
    </article>
  );
}

export default Card;