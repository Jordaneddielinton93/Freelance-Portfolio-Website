import style from "./CommunityHero.module.css";
import Image from "next/image";

const CommunityHero = () => {
  return (
    <section className={style.Container}>
      <article className={style.Container_Main}>


        <div className={style.LeftSide}>
          <h1 className={style.TopHeading}>Featured Articles</h1>
          <div className={style.LeftSide_img}>
            <Image
              alt="Slides"
              src="/images/rome.jpg"
              layout={'fill'} objectFit={'cover'}
            />
          </div>
          <h3 className={style.CardHeading}>This is the latest title Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus numquam iusto ut rerum voluptatum sequi repellendus deserunt? Ipsam consequatur suscipit temporibus repudiandae impedit accusamus aliquam ut, totam consectetur. Totam.</p>
        </div>
        <div className={style.RightSide}>
          <h1 className={style.TopHeading}>Sub Articles</h1>
          <SubArticleCard />
          <SubArticleCard />
          <SubArticleCard />

        </div>


      </article>
    </section>
  );
}

export default CommunityHero;



function SubArticleCard() {
  return (
    <aside className={style.RightSide_Card}>
      <div className={style.RightSide_img}>
        <Image
          alt="Slides"
          src="/images/rome.jpg"
          layout={'fill'} objectFit={'cover'}
        />
      </div>
      <h4 className={style.RightSide_Card_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla, hic neque cum dolores culpa magnam libero velit</h4>
    </aside>)
}