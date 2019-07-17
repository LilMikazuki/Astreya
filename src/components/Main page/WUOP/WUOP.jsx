import React from "react";
import styles from "./WUOP.module.css";

const typesUsers = [
  { id: 1, name: "Художники" },
  { id: 2, name: "Музыканты" },
  { id: 3, name: "Видеоблогеры" },
  { id: 4, name: "Писатели" },
  { id: 5, name: "Дизайнеры" },
  { id: 6, name: "Фотографы" },
  { id: 7, name: "Режиссёры" },
  { id: 8, name: "Подкастеры" }
];

export default class WUOP extends React.Component {
  render() {
    return (
      <section className={"section " + styles.WUOP}>
        <h2 className={"h2 " + styles.WUOP__title}>
          Кто пользуется нашей платформой?
        </h2>
        <ul className={"ul " + styles.WUOP__typesUsersList}>
          {typesUsers.map(type => (
            <li className={"li " + styles.WUOP__type} key={type.id.toString()}>
              <a
                className={"a " + styles.WUOP__linkOnType}
                href={"#" + type.name}
              >
                {type.name}
              </a>
            </li>
          ))}
        </ul>
        <h3 className={"h3 " + styles.WUOP__subtext}>
          И другие люди, создающие интересный контент
          <br />и желающие получать доход от своего хобби.
        </h3>
      </section>
    );
  }
}
