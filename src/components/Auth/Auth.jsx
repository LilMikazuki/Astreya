import React from "react";
import styles from "./Auth.module.css";
import RegForm from "./SignUp/RegForm";
import Header from "../Header/Header";
import LoginForm from "./SignIn/LoginForm";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: { classList: styles.active, active: true },
      signUp: { classList: "", active: false },
      type: "sign_in"
    };
  }

  /**
   * Changing from with sign in to sign up and reverse
   * @param e event (click)
   */
  changeSign(e) {
    e.preventDefault();
    const id = e.target.id; // ID of the received element
    const active =
      id === "sign_in" ? this.state.signIn.active : this.state.signUp.active; // check element state
    if (active === null || active === true) return;

    let state = this.state; // getting current component state
    switch (id) {
      case "sign_in":
        // changing state values
        [state.signIn.active, state.signIn.classList] = [true, styles.active];
        [state.signUp.active, state.signUp.classList] = [false, ""];
        this.setState({
          signUp: state.signUp,
          signIn: state.signIn,
          type: "sign_in"
        });
        break;
      case "sign_up":
        // changing state values
        [state.signIn.active, state.signIn.classList] = [false, ""];
        [state.signUp.active, state.signUp.classList] = [true, styles.active];
        this.setState({
          signUp: state.signUp,
          signIn: state.signIn,
          type: "sign_up"
        });
        break;
      default:
        break;
    }
  }

  render() {
    let Form = null;
    if (this.state.signUp.active === true) {
      Form = <RegForm />;
    } else if (this.state.signIn.active === true) {
      Form = <LoginForm />;
    }

    return (
      <div className={styles.AuthPage}>
        <Header />
        <section className={styles.AuthPage__Cover}>
          <nav className={styles.AuthPage__sections}>
            <a
              href={"#sign_in"}
              id="sign_in"
              className={
                styles.AuthPage__section + " " + this.state.signIn.classList
              }
              onClick={this.changeSign.bind(this)}
            >
              Sign in
            </a>
            <a
              href={"#sign_in"}
              id="sign_up"
              className={
                styles.AuthPage__section + " " + this.state.signUp.classList
              }
              onClick={this.changeSign.bind(this)}
            >
              Sign Up
            </a>
          </nav>
          {Form}
        </section>
      </div>
    );
  }
}
