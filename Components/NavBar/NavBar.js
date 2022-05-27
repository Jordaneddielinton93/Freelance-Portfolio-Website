import style from "../../styles/NavBar.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
const NavBar = () => {
  return (
    <nav className={style.NavContainer}>
      <div className={style.NavContainer_Fixed}>
        <Image
          alt="Logo Inistials"
          src="/images/LogoInistials.svg"
          width="85px"
          height={"70px"}
        />
        <ul className={style.NavContainer_Fixed_List}>
          <li className={style.NavContainer_Fixed_List_Item}>Store</li>
          <li className={style.NavContainer_Fixed_List_Item}>Article</li>
          <li className={style.NavContainer_Fixed_List_Item}>Community</li>
          <li className={style.NavContainer_Fixed_List_Item}>Projects</li>
          <li className={style.NavContainer_Fixed_List_Item}>About</li>
        </ul>

        <Primary_ButtonCTA Label="Contact" />
      </div>
    </nav>
  );
};

export default NavBar;
