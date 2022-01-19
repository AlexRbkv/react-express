import React, { useContext } from 'react';
import { Context } from '../../index';
import stylesNav from './navbar.module.css';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {ButtonCustom} from "../buttons/ButtonCustom";

export const Navbar = observer( () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <header className={stylesNav.navWrap}>
            <nav className={stylesNav.navContent}>
                <NavLink to={SHOP_ROUTE} className={stylesNav.navCaption}>TechWorld</NavLink>
                <div className={stylesNav.navMenu}>
                    <NavLink to={SHOP_ROUTE} className={stylesNav.navMenuItem}>Home</NavLink>
                        {user.isAuth ?
                            <React.Fragment>
                                <NavLink to={ADMIN_ROUTE} className={stylesNav.navMenuItem}>Админ панель</NavLink>
                                <NavLink to={LOGIN_ROUTE} onClick={() => logOut()} className={stylesNav.navMenuItem}>Выйти</NavLink>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <NavLink to={LOGIN_ROUTE} className={stylesNav.navMenuItem} onClick={() => navigate(LOGIN_ROUTE) }>Войти</NavLink>
                                <NavLink to={REGISTRATION_ROUTE} className={stylesNav.navMenuItem}>Регистрация</NavLink>
                            </React.Fragment>
                        }
                </div>
            </nav>
        </header>
    );
});
