import React, { useContext } from 'react';
import { Context } from '../../index';
import styles from './navbar.module.css';
import {Link, NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";

const Navbar = observer( () => {
    const { user } = useContext(Context);
    return (
        <div className={styles.navWrap}>
            <div className={styles.navContent}>
                <NavLink to={SHOP_ROUTE} className={styles.navCaption}>TechWorld</NavLink>
                    {user.isAuth ?
                        <div className={styles.navMenu}>
                            <NavLink to={SHOP_ROUTE} className={styles.navMenuItem}>Home</NavLink>
                            <NavLink to={ADMIN_ROUTE} className={styles.navMenuItem}>Админ панель</NavLink>
                            <a className={styles.navMenuItem}>Выйти</a>
                        </div>
                    :
                        <div className={styles.navMenu}>
                            <NavLink to={SHOP_ROUTE} className={styles.navMenuItem}>Home</NavLink>
                            <NavLink to={LOGIN_ROUTE} className={styles.navMenuItem} onClick={() => user.setIsAuth(true)}>Войти</NavLink>
                            <NavLink to={REGISTRATION_ROUTE} className={styles.navMenuItem}>Регистрация</NavLink>
                        </div>
                    }
            </div>
        </div>
    );
});

export default Navbar;
