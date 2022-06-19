
import style from "./ArticleContainer.module.css"
const ArticleContainer = ({ children }) => {
  return (
    <div className={style.ArticleContainer}>
      {children}
    </div>
  );
}

export default ArticleContainer;