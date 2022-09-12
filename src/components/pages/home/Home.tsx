import React from "react";
import { NavLink } from "react-router-dom";
import { roots } from "../../constants";
import styles from "./home.module.scss";

export const Home = React.memo(function Home() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>My contacts</header>

      <div className={styles.enterLinks}>
        <NavLink to={roots.login}>Login</NavLink> or{" "}
        <NavLink to={roots.signUp}>Sign up</NavLink>
      </div>
    </div>
  );
});
