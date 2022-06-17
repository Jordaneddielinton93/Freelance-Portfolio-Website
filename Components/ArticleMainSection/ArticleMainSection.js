import { useState } from "react";
import ArtLogo from "../ArtLogo/ArtLogo";
import Card from "../Card/Card";
import FilterBar from "../FilterBar/FilterBar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./ArticleMainSection.module.css"





const ArticleMainSection = ({ CardInfo }) => {
  let [CardObj, setCardObj] = useState(CardInfo)
  let [inputValue, setInputValue] = useState("")
  console.log(CardInfo)
  console.log(inputValue)
  return (
    <main className={styles.HomeMain}>
      <SearchBar setInputValue={setInputValue} />
      <ArtLogo />
      <FilterBar />

      <div className={styles.CardContainer}>
        {CardObj && [1, 1, 1, 1,].map(({ id, attributes }) => {
          // let Title = attributes.Card_Title.toLowerCase().includes(`${inputValue.toLowerCase()}`)
          // let Painter = attributes.Card_Painter.toLowerCase().includes(`${inputValue.toLowerCase()}`)

          return (inputValue.length == 0 || Title || Painter) &&
            <Card key={id} attributes={attributes} />
        })}


      </div>

    </main>
  );
}

export default ArticleMainSection;