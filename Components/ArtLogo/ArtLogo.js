import style from "./ArtLogo.module.css"

const ArtLogo = ({ Label }) => {
  return (
    <header className={style.ArtLogo}>
      <h1 className={style.ArtLogo_header}>{Label}</h1>
      {/* <h1 className={style.ArtLogo_header}></h1> */}


    </header>
  );
}

export default ArtLogo;