import styles from "./Plantpot.module.css"

const Plantpot = () => {
  return (
    <div className={styles.wrap} >
      <div className={styles.base}>
        <div className={styles.flowerpot}></div>
        <div className={`${styles.blade} ${styles.blade_center}`} ></div>
        <div className={`${styles.blade} ${styles.blade_left_s}`}></div>
        <div className={`${styles.blade} ${styles.blade_right_s}`}></div>
        <div className={`${styles.blade} ${styles.blade_left_l}`}></div>
        <div className={`${styles.blade} ${styles.blade_right_l}`}></div>
      </div>
    </div>
  );
}

export default Plantpot;