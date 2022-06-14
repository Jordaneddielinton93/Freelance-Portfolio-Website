import style from "./Phone1.module.css";
import Image from "next/image";


const Phone1 = ({ img1, img2, img3, img4, img5 }) => {
  return (
    <div className={style.Container}>
      <div className={style.phoneNotch}>
        <div className={style.phoneNotchCamera}></div>
      </div>
      <div className={style.phoneInnerShell}>
        <div className={style.screenSaver}>Hover & scroll</div>
        {img1 && <Image style={{ marginTop: "20px" }}
          src={img1}
          alt="bikeimg1"
          width="235px"
          height="494px"
        />}
        {img2 && <Image style={{ marginTop: "20px" }}
          src={img2}
          alt="bikeimg1"
          width="235px"
          height="494px"
        />}
        {img3 && <Image style={{ marginTop: "20px" }}
          src={img3}
          alt="bikeimg1"
          width="235px"
          height="494px"
        />}
        {img4 && <Image style={{ marginTop: "20px" }}
          src={img4}
          alt="bikeimg1"
          width="235px"
          height="494px"
        />}
        {img5 && <Image style={{ marginTop: "20px" }}
          src={img5}
          alt="bikeimg1"
          width="235px"
          height="223px"
        />}

        {/* <img className={style.bikeIMG1}
          srcSet={bikeIMG2}
          alt="bikeimg2"
          width="100%" />

        <img className={style.bikeIMG1}
          srcSet={bikeIMG3} alt="bikeimg3" width="100%" />
        <img className={style.bikeIMG1}
          srcSet={bikeIMG4} alt="bikeimg4" width="100%" />
        <img className={style.bikeIMG1}
          srcSet={bikeIMG5} alt="bikeimg5" width="100%" /> */}

      </div>
      <div className={style.phoneButton}>
        <a target="_blank" href="https://bike-man-dan-wheeldeal.netlify.app/" rel="noreferrer">Visit  here</a>
      </div>
    </div>
  );
}

export default Phone1;



