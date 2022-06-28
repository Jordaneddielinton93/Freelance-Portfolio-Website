import styles from "./Loading.module.css"
const Loading = () => {
  return (
    <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
}

export default Loading;