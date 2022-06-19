import Card from "../Card/Card";
import styles from "./ArticleCards.module.css"
const ArticleCards = () => {
  return (
    <div className={styles.CardContainer}>
      {[1, 1, 1, 1,].map((item) => {
        return <Card key={item} />
      })}


    </div>
  );
}

export default ArticleCards;