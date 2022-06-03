import style from "./NavBar.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className={style.NavContainer}>
      <div className={style.NavContainer_Fixed}>
        <Link href="/">
          <div className={style.NavContainer_logo}>
            <Image
              alt="Logo Inistials"
              src="/images/greyback.png"
              width="60px"
              height={"60px"}
            />
            <h4>Jordan Linton</h4>
          </div>
        </Link>
        <ul className={style.NavContainer_Fixed_List}>
          <Link href="/">
            <li className={style.NavContainer_Fixed_List_Item}>Store</li>
          </Link>
          <Link href="/">
            <li className={style.NavContainer_Fixed_List_Item}>Article</li>
          </Link>
          <Link href="/">
            <li className={style.NavContainer_Fixed_List_Item}>Community</li>
          </Link>
          <Link href="/">
            <li className={style.NavContainer_Fixed_List_Item}>Projects</li>
          </Link>
          <Link href="/About">
            <li className={style.NavContainer_Fixed_List_Item}>About</li>
          </Link>
        </ul>

        <Primary_ButtonCTA Label="Contact" />
      </div>
    </nav>
  );
};

export default NavBar;
