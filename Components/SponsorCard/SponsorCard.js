import Image from "next/image";
import styles from "./SponsorCard.module.css"


const SponsorCard = ({ bgImg, labelTop, labelBottom }) => {
  return (
    <section className={styles.content} style={{ backgroundImage: `url(${bgImg})` }}>
      <h3 className={styles.content_Top}>{labelTop}</h3>
      <h3 className={styles.content_Bottom}>{labelBottom}</h3>
    </section>
  );
}

export default SponsorCard;