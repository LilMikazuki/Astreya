import React from "react";
import styles from "./LoginForm.module.css";

export default class LoginForm extends React.Component {
  render() {
    return (
      <form className={"form " + styles.LoginForm__form}>
        <input
          className={styles.LoginForm__field}
          type={"text"}
          placeholder={"Username or email"}
        />
        <input
          className={styles.LoginForm__field}
          type={"password"}
          placeholder={"Password"}
        />
        <button className={"button " + styles.LoginForm__submit}>
          SIGN IN
        </button>
      </form>
    );
  }
}
