import { useState } from "react";
import ArticleCards from "../Components/ArticleCards/ArticleCards";
import ArticleContainer from "../Components/ArticleContainer/ArticleContainer";
import ArticleMainSection from "../Components/ArticleMainSection/ArticleMainSection";
import ArtLogo from "../Components/ArtLogo/ArtLogo";
import CardTopic from "../Components/CardTopic/CardTopic";

import NavBar from "../Components/NavBar/NavBar";
import NavBarLeft from "../Components/NavBarLeft/NavBarLeft";
import NavBarRight from "../Components/NavBarRight/NavBarRight";

const Tutor = () => {
  let [CardObj, setCardObj] = useState("")
  let [inputValue, setInputValue] = useState("")
  return (
    <div>
      <NavBar />
      <ArticleContainer>
        <NavBarLeft />
        <ArticleMainSection CardInfo={[]}>
          <ArtLogo Label={"Need One to One Tutoring"} />

          <h2>Topic of Choice:</h2>
          {[1, 2, 3, 4].map((item) => {
            return <CardTopic key={item} />
          })}

        </ArticleMainSection>
        <NavBarRight />
      </ArticleContainer>


    </div>
  );
}

export default Tutor;