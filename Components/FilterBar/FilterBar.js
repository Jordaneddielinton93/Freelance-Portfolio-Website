import styles from "./FilterBar.module.css"

const FilterBar = () => {
  return ( 
    <section className={styles.FilterBar}>

      <h3 className={styles.FilterBar_Title}>Tranding Topics</h3>

      <div className={styles.FilterBar_filters}>

        <ol className={styles.FilterBar_filters_buttons}>
          <button className={styles.FilterBar_filters_buttons_lis}>
            latest
          </button>
          <button className={styles.FilterBar_filters_buttons_lis}>
            Pretties
          </button>
          <button className={styles.FilterBar_filters_buttons_lis}>
            New Style
          </button>
          <button className={styles.FilterBar_filters_buttons_lis}>
            Funky
          </button>
        </ol>

        <button className={styles.FilterBar_filters_buttons_lis}>
          Filter
        </button>

      </div>

    </section>
   );
}
 
export default FilterBar;