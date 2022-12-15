import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <nav className={styles.mainNavigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/news">News</NavLink>
    </nav>
  );
}
