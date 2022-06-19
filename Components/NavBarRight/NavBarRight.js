import styles from "./NavBarRight.module.css"
import Image from "next/image"
import SponsorCard from "../SponsorCard/SponsorCard";

const NavBarRight = () => {
  return (
    <aside className={styles.nav}>
      <ul className={styles.nav_list}>
        <div className={styles.nav_list_logo}>
          <Image src="/images/greyback.png" width="100px" height="100px" alt="logo" />
          <h1 className={styles.nav_title}>Featured</h1>
          <h2 className={styles.nav_title}>Community</h2>

        </div>
        <SponsorCard bgImg={"https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/23909297/23909297-1649853858768-b8840c3922841.jpg"}
          labelTop="Erdogan Elma"
          labelBottom="i++ Podcast" />
        <SponsorCard bgImg={"https://pbs.twimg.com/media/FI5tl66XwAI7vYW?format=jpg&name=medium"} labelTop="School of Code"
          labelBottom={"Learn to Code"}
        />
        <SponsorCard bgImg={"https://pbs.twimg.com/media/FI5tl66XwAI7vYW?format=jpg&name=medium"} labelTop="School of Code"
          labelBottom={"Learn to Code"}
        />
        <SponsorCard bgImg={"https://pbs.twimg.com/media/FI5tl66XwAI7vYW?format=jpg&name=medium"} labelTop="School of Code"
          labelBottom={"Learn to Code"}
        />
      </ul>
    </aside>
  );
}

export default NavBarRight;