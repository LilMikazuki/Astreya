import React from "react";
import styles from "./RegForm.module.css";

export default class RegForm extends React.Component {
  render() {
    return (
      <form className={"form " + styles.RegForm__form}>
        <input
          className={styles.RegForm__field}
          type={"text"}
          placeholder={"Username"}
        />
        <input
          className={styles.RegForm__field}
          type={"email"}
          placeholder={"E-mail"}
        />
        <input
          className={styles.RegForm__field}
          type={"password"}
          placeholder={"Password"}
        />
        <button className={"button " + styles.RegForm__submit}>SIGN UP</button>
      </form>
    );
  }
}
