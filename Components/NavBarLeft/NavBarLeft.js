import styles from "./NavBarLeft.module.css"
import Image from "next/image"
import { CgMenuGridO } from 'react-icons/cg';
import { IoLogoNodejs } from 'react-icons/io';
import { ImExit } from 'react-icons/im';
import { BsSticky, BsFillMenuButtonWideFill, BsSegmentedNav, BsMenuButtonWideFill, BsMenuUp, BsMenuApp } from 'react-icons/bs';
const NavBarLeft = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>

        <IoLogoNodejs style={{ fontSize: "3rem", color: "green" }} />

        <div className={styles.nav_list_container}>
          <li className={styles.nav_list_container_listItem}>
            <CgMenuGridO />
          </li>
          <li className={styles.nav_list_container_listItem}>
            <BsSticky />
          </li>
          <li className={styles.nav_list_container_listItem}>
            <BsFillMenuButtonWideFill />
          </li>
        </div>

        <span className={styles.nav_list_divider}></span>

        <div className={styles.nav_list_container}>
          <li className={styles.nav_list_container_listItem}>
            <BsSegmentedNav />
          </li>
          <li className={styles.nav_list_container_listItem}>
            <BsMenuButtonWideFill />
          </li>
          <li className={styles.nav_list_container_listItem}>
            <BsMenuUp />
          </li>
          <li className={styles.nav_list_container_listItem}>
            <BsMenuApp />
          </li>
          <li className={styles.nav_list_container_listItem}>hi</li>
        </div>

        <li className={styles.nav_list_container_listItem}>
          <ImExit />
        </li>


      </ul>
    </nav>
  );
}

export default NavBarLeft;