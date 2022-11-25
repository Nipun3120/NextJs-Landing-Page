import styles from "../../styles/UI/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <img
          className={styles.image}
          src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg"
        />
      </div>
      <div className={styles.navRight}>
        <ul className={styles.navLinkList}>
          <li className={styles.navLinks}>plan your trip</li>
          <li className={styles.navLinks}>book tours</li>
          <li className={styles.navLinks}>book ferry</li>
          <li className={styles.navLinks}>travel blogs</li>
          <li className={styles.navLinks}>contact us</li>
        </ul>
      </div>
    </div>
  );
};
