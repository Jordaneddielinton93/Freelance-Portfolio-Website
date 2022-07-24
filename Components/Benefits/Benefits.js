import style from "./Benefits.module.css"
import { TutorCards } from "../02-Constants/TutorSubjects";
const Benefits = () => {
  return (
    <div className={style.Container}>
      {TutorCards.map(({ icon, title, textContent }) => {
        return <BenefitsCard key={title} icon={icon} title={title} textContent={textContent} />
      })}
    </div>
  );
}

export default Benefits;


const BenefitsCard = ({ icon, title, textContent }) => {
  return (
    <article className={style.Article}>
      <div className={style.Article_titleContainer}>
        <span className={style.Article_Icon}>{icon}</span>
        <h2 >{title}</h2>
      </div>
      <p className={style.Article_content}>{textContent}</p>
    </article>
  );
}
