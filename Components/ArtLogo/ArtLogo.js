import style from "./ArtLogo.module.css"
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA"
const ArtLogo = ({ Label }) => {
  return (
    <header className={style.ArtLogo}>
      <h1 className={style.ArtLogo_header}>{Label}</h1>
      {/* <h1 className={style.ArtLogo_header}></h1> */}
      <div className={style.ArtLogo_Buttons}>
        <Secondary_ButtonCTA Label={"FindMore"} width="150px" minWidth="150px" />
        <Secondary_ButtonCTA Label={"Upload"} minWidth="150px" />
      </div>

    </header>
  );
}

export default ArtLogo;