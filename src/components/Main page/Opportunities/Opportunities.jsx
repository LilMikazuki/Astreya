import React from "react";
import styles from "./Opportunities.module.css";

/* Images import */
const TransparentFuture = require("../../../content/icons/main page/transparent future.svg");
const Feedback = require("../../../content/icons/main page/communication.svg");
const ExclusiveGifts = require("../../../content/icons/main page/exclusive-gifts.svg");

export default class Opportunities extends React.Component {
  render() {
    return (
      <section className={"section " + styles.that}>
        <h1 className={"h1 " + styles.that__title}>
          Astreya откроет для вас множество возможностей
        </h1>
        <div className={styles.that__item}>
          <img
            src={TransparentFuture}
            className={styles.that__image}
            alt={"opportunity "}
          />
          <span className={styles.that__desc}>
            Astreya предскажет ваш доход в ближайшее время, а также предоставит
            статистические данные и отчёты.
          </span>
        </div>
        <div className={styles.that__item}>
          <img
            src={Feedback}
            className={styles.that__image}
            alt={"opportunity"}
          />
          <span className={styles.that__desc}>
            Общайтесь напрямую со своими самыми преданными поклонниками.
            Получайте от них обратную связь и совершенствуйте свой контент.
          </span>
        </div>
        <div className={styles.that__item}>
          <img
            src={ExclusiveGifts}
            className={styles.that__image}
            alt={"opportunity"}
          />
          <span className={styles.that__desc}>
            Отблагодарите своих поклонников эксклюзивными подарками, которые они
            не смогут получить где-либо ещё.
          </span>
        </div>
      </section>
    );
  }
}
