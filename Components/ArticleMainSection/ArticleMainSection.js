import { useState } from "react";
import ArticleCards from "../ArticleCards/ArticleCards";
import ArtLogo from "../ArtLogo/ArtLogo";
import FilterBar from "../FilterBar/FilterBar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./ArticleMainSection.module.css"





const ArticleMainSection = ({ children }) => {

  return (
    <main className={styles.HomeMain}>
      {children}
    </main>
  );
}

export default ArticleMainSection;