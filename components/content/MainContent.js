import styles from "../../styles/content/MainContent.module.css";
import { LeftWrapper } from "./LeftSection/LeftWrapper";
import { RightWrapper } from "./RightSection/RightWrapper";

export const MainContent = () => {
  return (
    <section className={styles.section}>
      <LeftWrapper />
      <RightWrapper />
    </section>
  );
};
