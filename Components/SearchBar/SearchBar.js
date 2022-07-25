import styles from "./SearchBar.module.css"
import { IoMdNotifications } from 'react-icons/io';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { useState } from "react";
const SearchBar = ({ setInputValue, value }) => {
  return (
    <div className={styles.SearchBar}>

      <input value={value} onChange={(e) => setInputValue(e.target.value)}
        type="search" name="Search" placeholder="Find your Topic now" className={styles.inputbox} />

      <section className={styles.SearchBar_Section}>
        <div className={styles.SearchBar_Section_counter}>
          <MdAccountBalanceWallet style={{ fontSize: "1rem" }} />
          <h1>22E12123</h1>
        </div>
        <div className={styles.SearchBar_Section_notification}>
          <IoMdNotifications />
        </div>
      </section>

    </div>
  );
}

export default SearchBar;