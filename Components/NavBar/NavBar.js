import style from "./NavBar.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import Link from "next/link";
import { useRouter } from 'next/router'
const NavBar = () => {
  const { pathname } = useRouter()
  return (
    <nav className={style.NavContainer}>
      <div className={style.NavContainer_Fixed}>
        <Link href="/">
          <div className={style.NavContainer_logo} >
            <Image
              alt="Logo Home"
              src="/images/greyback.png"
              width="60px"
              height={"60px"}
            />
            <h4 style={{ borderBottom: pathname === "/" ? "#21C7A6 solid thin" : "none" }}>Jordan Linton</h4>
          </div>
        </Link>
        <ul className={style.NavContainer_Fixed_List}>
          <Link href="/Tutor">
            <li style={{ color: pathname === "/Tutor" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/Tutor" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>TUTOR</li>
          </Link>
          <Link href="/Articles">
            <li style={{ color: pathname === "/Articles" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/Articles" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>ARTICLES</li>
          </Link>
          {/* <Link href="/Community">
            <li style={{ color: pathname === "/Community" ? "#23c7a7" : "#5f6773" }} className={style.NavContainer_Fixed_List_Item}>Community</li>
          </Link> */}
          <Link href="/Projects">
            <li style={{ color: pathname === "/Projects" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/Projects" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>PROJECTS</li>
          </Link>
          <Link href="/About">
            <li style={{ color: pathname === "/About" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/About" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>ABOUT</li>
          </Link>
        </ul>

        <Primary_ButtonCTA Label="Contact" />
      </div>
    </nav>
  );
};

export default NavBar;
