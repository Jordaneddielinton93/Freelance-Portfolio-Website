import style from "./Phone1.module.css";
import Image from "next/image";

const Phone1 = ({ Href, img1, img2, img3, img4, img5 }) => {
  return (
    <div className={style.Container}>
      <div className={style.phoneNotch}>
        <div className={style.phoneNotchCamera}></div>
      </div>
      <div className={style.phoneInnerShell}>
        <div className={style.screenSaver}>Hover & scroll</div>
        {img1 && (
          <Image
            style={{ marginTop: "20px" }}
            src={img1}
            alt="bikeimg1"
            width="235px"
            height="494px"
          />
        )}
        {img2 && (
          <Image
            style={{ marginTop: "20px" }}
            src={img2}
            alt="phoneImg"
            width="235px"
            height="494px"
          />
        )}
        {img3 && (
          <Image
            style={{ marginTop: "20px" }}
            src={img3}
            alt="phoneImg"
            width="235px"
            height="494px"
          />
        )}
        {img4 && (
          <Image
            style={{ marginTop: "20px" }}
            src={img4}
            alt="phoneImg"
            width="235px"
            height="494px"
          />
        )}
        {img5 && (
          <Image
            style={{ marginTop: "20px" }}
            src={img5}
            alt="phoneImg"
            width="235px"
            height="223px"
          />
        )}
      </div>
      <div className={style.phoneButton}>
        <a target="_blank" href={Href} rel="noreferrer">
          Visit here
        </a>
      </div>
    </div>
  );
};

export default Phone1;
