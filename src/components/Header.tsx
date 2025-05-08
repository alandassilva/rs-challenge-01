import { Rocket } from "phosphor-react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Rocket size={36} weight="bold" />
      to
      <label>do</label>
    </header>
  );
};
