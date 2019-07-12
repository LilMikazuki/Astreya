import React from "react";

/**
 * Who uses our platform?
 * @returns {*}
 * @constructor
 */
function WUOP() {
    const typesUsers = [
        {id: 1, name: 'Художники'},
        {id: 2, name: 'Музыканты'},
        {id: 3, name: 'Видеоблогеры'},
        {id: 4, name: 'Писатели'},
        {id: 5, name: 'Дизайнеры'},
        {id: 6, name: 'Фотографы'},
        {id: 7, name: 'Режиссёры'},
        {id: 8, name: 'Подкастеры'}
    ];

    return (
        <section className={'section WUOP'}>
            <h2 className={'h2 WUOP__title'}>Кто пользуется нашей платформой?</h2>
            <ul className={'ul WUOP__typesUsersList'}>
                {
                    typesUsers.map((type) =>
                    <li className={'li WUOP__type'} key={type.id.toString()}>
                        <a className={'a WUOP__linkOnType'} href={'#' + type.name}>{type.name}</a>
                    </li>)
                }
            </ul>
            <h3 className={'h3 WUOP__subtext'}>И другие люди, создающие интересный контент<br/>и желающие получать доход от своего хобби.</h3>
        </section>
    );
}

export default WUOP