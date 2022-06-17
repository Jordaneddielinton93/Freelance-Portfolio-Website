import ArticleHero from "../Components/ArticleHero/ArticleHero";
import NavBar from "../Components/NavBar/NavBar";
import NavBarLeft from "../Components/NavBarLeft/NavBarLeft"
import NavBarRight from "../Components/NavBarRight/NavBarRight"
import ArticleMainSection from "../Components/ArticleMainSection/ArticleMainSection"
import styles from "../styles/Home.module.css"
const Articles = () => {
  return (<div>
    <NavBar />
    {/* <ArticleHero /> */}
    <div style={ArticleContainer}>
      <NavBarLeft />
      <ArticleMainSection CardInfo={[]} />
      <NavBarRight />
    </div>

  </div>);
}

export default Articles;

const ArticleContainer = {
  width: "100vw",
  height: " 90vh",
  // flex: 1,
  backgroundColor: "#F7F9FA",
  display: "flex"
}