import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import styles from "./FilterBar.module.css"

const FilterBar = () => {
  return (
    <section className={styles.FilterBar}>

      <h3 className={styles.FilterBar_Title}>Trending Topics</h3>

      <div className={styles.FilterBar_filters}>

        <ol className={styles.FilterBar_filters_buttons}>
          <button className={styles.FilterBar_filters_buttons_lis}>
            Featured
          </button>
          <button className={styles.FilterBar_filters_buttons_lis}>
            Latest
          </button>
          <button className={styles.FilterBar_filters_buttons_lis}>
            Most Read
          </button>
          <button className={styles.FilterBar_filters_buttons_lis}>
            Funky
          </button>
        </ol>



      </div>

    </section>
  );
}

export default FilterBar;