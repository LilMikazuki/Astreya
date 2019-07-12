import React from "react";

/* Images import */
const TransparentFuture = require("../content/icons/main page/transparent future.svg");
const Feedback = require("../content/icons/main page/communication.svg");
const ExclusiveGifts = require("../content/icons/main page/exclusive-gifts.svg");

/**
 * Opportunities for our users
 * @returns {*}
 * @constructor
 */
function Opportunities() {
    return (
        <section className={'section opportunities'}>
            <h1 className={'h1 opportunities__title'}>Astreya откроет для вас множество возможностей</h1>
            <div className={'opportunities__item'}>
                <img src={TransparentFuture} className={'opportunities__image'} alt={'opportunity  '}/>
                <span className={'opportunities__desc'}>
                     Astreya предскажет ваш доход в ближайшее время, а также предоставит статистические данные и отчёты.
                </span>
            </div>
            <div className={'opportunities__item'}>
                <img src={Feedback} className={'opportunities__image'} alt={'opportunity'}/>
                <span className={'opportunities__desc'}>
                     Общайтесь напрямую со своими самыми преданными поклонниками. Получайте от них обратную связь и совершенствуйте свой контент.
                </span>
            </div>
            <div className={'opportunities__item'}>
                <img src={ExclusiveGifts} className={'opportunities__image'} alt={'opportunity'}/>
                <span className={'opportunities__desc'}>
                     Отблагодарите своих поклонников эксклюзивными подарками, которые они не смогут получить где-либо ещё.
                </span>
            </div>
        </section>
    );
}

export default Opportunities