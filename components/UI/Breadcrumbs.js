import styles from "../../styles/UI/Breadcrumbs.module.css";
import { Breadcrumb } from "antd";
export const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumb}>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Andaman Travel Guide</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Havelock</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
