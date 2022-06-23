import Card from "../Card/Card";
import styles from "./ArticleCards.module.css"
const ArticleCards = ({ Articles }) => {
  return (
    <div className={styles.CardContainer}>
      {Articles && Articles.map(({ cardTitle, cardImg }) => {
        let Img = cardImg.fields.file.url
        return <Card key={cardTitle} Title={cardTitle} img={Img} />
      })}


    </div>
  );
}

export default ArticleCards;