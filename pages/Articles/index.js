
import NavBar from "../../Components/NavBar/NavBar";
import NavBarLeft from "../../Components/NavBarLeft/NavBarLeft"
import NavBarRight from "../../Components/NavBarRight/NavBarRight"
import ArticleMainSection from "../../Components/ArticleMainSection/ArticleMainSection"

import ArticleContainer from "../../Components/ArticleContainer/ArticleContainer";
import ArticleCards from "../../Components/ArticleCards/ArticleCards";
import FilterBar from "../../Components/FilterBar/FilterBar";
import ArtLogo from "../../Components/ArtLogo/ArtLogo";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useState } from "react";


import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({
    content_type: "articleCards",
  })
  return {
    props: {
      Articles: res.items.map((obj) => obj.fields)
    }
  }
}

const Articles = ({ Articles }) => {


  console.log(Articles)


  let [inputValue, setInputValue] = useState("")
  console.log(inputValue)
  return (<div>
    <NavBar />
    <ArticleContainer>
      <NavBarLeft />
      <ArticleMainSection CardInfo={[]}>
        <SearchBar setInputValue={setInputValue} />
        <ArtLogo Label={"Your Favourite Articles"} />
        <FilterBar />
        <ArticleCards inputValue={inputValue} Articles={Articles} />
      </ArticleMainSection>
      <NavBarRight />
    </ArticleContainer>




  </div>);
}

export default Articles;
