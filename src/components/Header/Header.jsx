import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

/* Images import */
const Logo = require("../../content/ASTREYA.svg");

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <nav
          id="nav-main"
          className={"nav " + styles.header__nav}
          data-minimize="no"
        >
          <ul className={"ul " + styles.nav__ul}>
            <li className={"li " + styles.nav__li}>
              <Link to={"/"} className={"a " + styles.nav__a}>
                <img
                  className={"img " + styles.header__logo}
                  src={Logo}
                  alt="logo"
                />
              </Link>
            </li>
            <li className={"li " + styles.nav__li}>
              <Link to={"/new"} className={"a " + styles.nav__a}>
                New
              </Link>
              <Link to={"/popular"} className={"a " + styles.nav__a}>
                Popular
              </Link>
            </li>
            <li className={"li " + styles.nav__li}>
              <Link to={"/auth"} className={"a " + styles.nav__a}>
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
