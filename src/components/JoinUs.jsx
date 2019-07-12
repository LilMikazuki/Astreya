import React from "react";

const Roles = [
    {
        id: 1,
        name: "Автор контента",
        description: "Если вы создаёте собственный контент,<br/>присоединитесь в качестве автора.",
        image: require("../content/icons/main page/creators.svg")
    },
    {
        id: 2,
        name: "Покровитель",
        description: "Если вы хотите поддержать автора,<br/>присоединяйтесь в качестве покровителя.",
        image: require("../content/icons/main page/social-media.svg")
    }
];

function JoinUs() {
    return (
        <section className={'section JoinUs'}>
            <div className={'div JoinUs__content'}>
            <h1 className={'h1 JoinUs__title'}>Давай продвигать интернет-культуру вместе.<br/>Выбери свою роль и присоединяйся к Astreya!</h1>
            {
                Roles.map((role) =>
                    <div className={'JoinUs__role'} data-roleId={role.id}>
                        <div className={'JoinUs__RoleDesc'}>
                            <h3 className={'h3 JoinUs__title--role'}>{role.name}</h3>
                            <span className={'span JoinUs__RoleDesc--span'} dangerouslySetInnerHTML={{__html: role.description}}/>
                            <button className={'button JoinUs__button'}>Присоединиться</button>
                        </div>
                        <img src={role.image} alt={'Creators'} className={'img JoinUs__RoleCover'}/>
                    </div>)
            }
            </div>
        </section>
    );
}

export default JoinUs