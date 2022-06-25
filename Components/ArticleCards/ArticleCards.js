import Card from "../Card/Card";
import styles from "./ArticleCards.module.css"
const ArticleCards = ({ Articles, inputValue }) => {
  return (
    <div className={styles.CardContainer}>
      {Articles && Articles.map(({ cardTitle, cardImg, readTime, carddiscription, slug }) => {
        let Img = cardImg.fields.file.url
        console.log(cardTitle)
        return !inputValue.length ? (
          <Card
            key={cardTitle}
            Title={cardTitle}
            img={Img}
            readTime={readTime}
            carddiscription={carddiscription}
            slug={slug}
          />
        ) :
          cardTitle.toLowerCase().includes(inputValue.toLowerCase()) &&
          <Card
            key={cardTitle}
            Title={cardTitle}
            img={Img}
            readTime={readTime}
            carddiscription={carddiscription}
            slug={slug}
          />
      })}


    </div>
  );
}

export default ArticleCards;