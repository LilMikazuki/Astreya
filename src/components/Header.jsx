import React from "react";

/* Images import */
const Logo = require("../content/logo.svg");

/**
 * Header and main nav-menu
 * @returns {*}
 * @constructor
 */
function Header() {
    return (
        <header className='header'>
            <nav id="nav-main" className='nav header__nav nav--main' data-minimize='no'>
                <ul className="ul nav__ul">
                    <li className='li nav__li li--logo'>
                        <a href='#a'><img className='img header__logo' src={Logo} alt='logo'/></a>
                    </li>
                    <li className='li nav__li'>
                        <a href='#a' className='a nav__a'>Новое</a>
                        <a href='#a' className='a nav__a'>Популярное</a>
                    </li>
                    <li className='li nav__li'>
                        <a href='#a' className='a nav__a'>Вход</a>
                        <a href='#a' className='a nav__a'>Регистрация</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header