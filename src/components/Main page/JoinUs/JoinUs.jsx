import React from "react";
import styles from "./JoinUs.module.css";

const Roles = [
  {
    id: 1,
    name: "Автор контента",
    description:
      "Если вы создаёте собственный контент,<br/>присоединитесь в качестве автора.",
    image: require("../../../content/icons/main page/creators.svg")
  },
  {
    id: 2,
    name: "Покровитель",
    description:
      "Если вы хотите поддержать автора,<br/>присоединяйтесь в качестве покровителя.",
    image: require("../../../content/icons/main page/social-media.svg")
  }
];

export default class JoinUs extends React.Component {
  render() {
    return (
      <section className={"section " + styles.JUs}>
        <div className={"div " + styles.JUs__content}>
          <h1 className={"h1 " + styles.JUs__title}>
            Давай продвигать интернет-культуру вместе.
            <br />
            Выбери свою роль и присоединяйся к Astreya!
          </h1>
          {Roles.map(role => (
            <div className={styles.JUs__role} data-roleId={role.id}>
              <div className={styles.JUs__RoleDesc}>
                <h3 className={"h3 " + styles.JUs__titleRole}>{role.name}</h3>
                <span
                  className={"span " + styles.JUs__RoleDescSpan}
                  dangerouslySetInnerHTML={{ __html: role.description }}
                />
                <button className={"button " + styles.JUs__button}>
                  Присоединиться
                </button>
              </div>
              <img
                src={role.image}
                alt={"Creators"}
                className={"img " + styles.JUs__RoleCover}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
