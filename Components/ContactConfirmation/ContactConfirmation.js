import style from "./Confirmation.module.css"
import { ImCancelCircle } from 'react-icons/im';
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiTick } from 'react-icons/ti';
import Loading from "../Animations/Loading/Loading";
const ContactConfirmation = ({ setConfirmation, loading }) => {
  return (
    <div className={style.container}>
      {loading ?
        <>
          <Loading />
        </> : <main className={style.container_Confirm}>
          <span className={style.undisplay} onClick={() => setConfirmation(false)}>
            <ImCancelCircle fontSize={"30px"} color="#23C7A7" pointsAtX="10px" />
          </span>
          <div className={style.waterContainer}>
            <span className={style.waterTick}><TiTick /></span>
            <div className={style.waterContainerWave}></div>
          </div>

          <h1>THANK YOU.</h1>
          <p>Your message has been recieved and I will be contacting you shortly to follow up. If you would like to speak immediately leave me a message on my socials</p>
          <h4>FOLLOW ME</h4>
          <section className={style.Socials}>
            <TiSocialLinkedinCircular fontSize={"50px"} />
            <TiSocialTwitterCircular fontSize={"50px"} />
          </section>
        </main>}
    </div>
  );
}

export default ContactConfirmation;