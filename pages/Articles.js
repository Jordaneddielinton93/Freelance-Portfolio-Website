
import NavBar from "../Components/NavBar/NavBar";
import NavBarLeft from "../Components/NavBarLeft/NavBarLeft"
import NavBarRight from "../Components/NavBarRight/NavBarRight"
import ArticleMainSection from "../Components/ArticleMainSection/ArticleMainSection"
import styles from "../styles/Home.module.css"
import ArticleContainer from "../Components/ArticleContainer/ArticleContainer";
import ArticleCards from "../Components/ArticleCards/ArticleCards";
import FilterBar from "../Components/FilterBar/FilterBar";
import ArtLogo from "../Components/ArtLogo/ArtLogo";
import SearchBar from "../Components/SearchBar/SearchBar";
import { useState } from "react";

const Articles = () => {
  let [CardObj, setCardObj] = useState("")
  let [inputValue, setInputValue] = useState("")
  return (<div>
    <NavBar />
    <ArticleContainer>
      <NavBarLeft />
      <ArticleMainSection CardInfo={[]}>
        <SearchBar setInputValue={setInputValue} />
        <ArtLogo Label={"Your Favourite Articles"} />
        <FilterBar />
        <ArticleCards />
      </ArticleMainSection>
      <NavBarRight />
    </ArticleContainer>




  </div>);
}

export default Articles;

