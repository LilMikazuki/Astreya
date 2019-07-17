import React from "react";
import styles from "./MainPageTitle.module.css";

export default class Title extends React.Component {
  render() {
    return (
      <div className={styles.title}>
        <h1 className={"h1 " + styles.title__h1}>
          ASTREYA – КРАУДФАНДИНГ ДЛЯ ПОДДЕРЖКИ ЛЮБИМЫХ АВТОРОВ
        </h1>
      </div>
    );
  }
}
