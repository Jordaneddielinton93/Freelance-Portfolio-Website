import Link from "next/link";
import Image from "next/image";
import styles from "./CardTopic.module.css"
import { AiFillQuestionCircle  } from "react-icons/ai";



const CardTopic = ({icon,subjectTitle,subjectDiscription,price,author,authorImg}) => {
  return (
    <Link href="/Contact">
      <section className={styles.Container} data-aos="fade-right">
        {icon}
        <h1 className={styles.TopicHeader}>{subjectTitle}</h1>
        <h5 className={styles.TopicPrice}>£{price} per week</h5>

        <AiFillQuestionCircle/>

        <div className={styles.AuthorContainer}>
          <h5 className={styles.AuthorContainer_Title}>{author}</h5>
          <span className={styles.AuthorContainer_img}><Image src={authorImg} width="50px" height="50px"/></span>
          
        </div>
        
      </section>
    </Link>
  );
}

export default CardTopic;