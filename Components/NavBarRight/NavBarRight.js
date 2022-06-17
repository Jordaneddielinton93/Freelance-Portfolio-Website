import styles from "./NavBarRight.module.css"
import Image from "next/image"

const NavBarRight = () => {
  return (
    <aside className={styles.nav}>
      <ul className={styles.nav_list}>
        <div style={{ textAlign: "center", color: "grey" }}>
          <Image src="/images/greyback.png" width="100px" height="100px" alt="logo" />
          <h1>Name</h1>
          <h2></h2>

        </div>


        <section className={styles.content}>
          section
        </section>
        <section className={styles.content}>
          section
        </section>
        <section className={styles.content}>
          section
        </section>
        <section className={styles.content}>
          section
        </section>


      </ul>
    </aside>
  );
}

export default NavBarRight;