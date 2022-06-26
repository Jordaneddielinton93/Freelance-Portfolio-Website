import Link from "next/link";
import { IoLogoNodejs } from "react-icons/io";
import styles from "./CardTopic.module.css"
const CardTopic = () => {
  return (
    <Link href="/Contact">
      <section className={styles.Container} data-aos="fade-right">
        <IoLogoNodejs style={{ fontSize: "3rem", color: "green" }} />
        <h1 className={styles.TopicHeader}>{"Work In Progress"}</h1>
        <h4>{"_"}Contact Me</h4>
      </section>
    </Link>
  );
}

export default CardTopic;