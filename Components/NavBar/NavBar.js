import style from "./NavBar.module.css";
import Image from "next/image";
import Primary_ButtonCTA from "../Buttons/Primary/Primary_ButtonCTA";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";
const NavBar = () => {
  const { pathname } = useRouter()

  let [toggle,setToggle]=useState(false)
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
        <span className={style.NavContainer_Primary}>
          <Primary_ButtonCTA Label="Contact" />
        </span>
        <div className={style.NavContainer_Burger} onClick={()=>setToggle(!toggle)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={style.NavContainer_BurgerMenu} style={{width:toggle?"90%":"0px"}}>
      <ul className={style.NavContainer_BurgerMenu_List} style={{display:toggle?"flex":"none"}}>
      <Link href="/">
            <li onClick={()=>setToggle(false)} style={{ color: pathname === "/" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/Tutor" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>Home</li>
          </Link>
          <Link href="/Tutor">
            <li onClick={()=>setToggle(false)} style={{ color: pathname === "/Tutor" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/Tutor" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>TUTOR</li>
          </Link>
          <Link href="/Articles">
            <li onClick={()=>setToggle(false)} style={{ color: pathname === "/Articles" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/Articles" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>ARTICLES</li>
          </Link>
          {/* <Link href="/Community">
            <li onClick={()=>setToggle(false)} style={{ color: pathname === "/Community" ? "#23c7a7" : "#5f6773" }} className={style.NavContainer_Fixed_List_Item}>Community</li>
          </Link> */}
          <Link href="/Projects">
            <li onClick={()=>setToggle(false)} style={{ color: pathname === "/Projects" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/Projects" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>PROJECTS</li>
          </Link>
          <Link href="/About">
            <li onClick={()=>setToggle(false)} style={{ color: pathname === "/About" ? "#23c7a7" : "#5f6773", borderBottom: pathname === "/About" ? "#21C7A6 solid thin" : "none" }} className={style.NavContainer_Fixed_List_Item}>ABOUT</li>
          </Link>
          <Primary_ButtonCTA Label="Contact" />

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
