import style from "./NavBar.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
const NavBar = () => {
  return (
    <nav className={style.NavContainer}>
      <div className={style.NavContainer_Fixed}>
        <div className={style.NavContainer_logo}>
          <Image
            alt="Logo Inistials"
            src="/images/greyback.png"
            width="60px"
            height={"60px"}
          />
          Jordan Linton
        </div>
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
