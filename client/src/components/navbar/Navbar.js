import React, { useContext } from 'react';
import { Context } from '../../index';
import stylesNav from './navbar.module.css';
import {Link, NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";

export const Navbar = observer( () => {
    const { user } = useContext(Context);
    return (
        <header className={stylesNav.navWrap}>
            <nav className={stylesNav.navContent}>
                <NavLink to={SHOP_ROUTE} className={stylesNav.navCaption}>TechWorld</NavLink>
                <div className={stylesNav.navMenu}>
                    <NavLink to={SHOP_ROUTE} className={stylesNav.navMenuItem}>Home</NavLink>
                        {user.isAuth ?
                            <React.Fragment>
                                <NavLink to={ADMIN_ROUTE} className={stylesNav.navMenuItem}>Админ панель</NavLink>
                                <a href="#" className={stylesNav.navMenuItem}>Выйти</a>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <NavLink to={LOGIN_ROUTE} className={stylesNav.navMenuItem} onClick={() => user.setIsAuth(true)}>Войти</NavLink>
                                <NavLink to={REGISTRATION_ROUTE} className={stylesNav.navMenuItem}>Регистрация</NavLink>
                            </React.Fragment>
                        }
                </div>
            </nav>
        </header>
    );
});
