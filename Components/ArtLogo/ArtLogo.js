import style from "./ArtLogo.module.css"
import Secondary_ButtonCTA from "../Buttons/Secondary/Secondary_ButtonCTA"
const ArtLogo = () => {
  return (
    <header className={style.ArtLogo}>
      <h1 className={style.ArtLogo_header}>Your Favourite Articles</h1>
      {/* <h1 className={style.ArtLogo_header}></h1> */}
      <div className={style.ArtLogo_Buttons}>
        <Secondary_ButtonCTA Label={"FindMore"} />
        <Secondary_ButtonCTA Label={"Upload"} />
      </div>

    </header>
  );
}

export default ArtLogo;