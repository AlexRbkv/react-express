import React from 'react';
import stylesAuth from './auth.module.css';
import {InputCustom} from "../../components/inputs/InputCustom";
import {ButtonCustom} from "../../components/buttons/ButtonCustom";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

export const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className={stylesAuth.authContainer}>
            <div className={stylesAuth.authWrap}>
                <span className={stylesAuth.authCaption}>{isLogin ? 'Авторизация' : 'Регистрация'}</span>
                <form className={stylesAuth.authForm}>
                    <InputCustom type='text' placeholder='Введите email'/>
                    <InputCustom type='text' placeholder='Введите пароль'/>
                    <div className={stylesAuth.authBtnRow}>
                        {isLogin ?
                            <span className={stylesAuth.authTextMin}>Нет аккаунта?<NavLink
                                className={stylesAuth.authTextMin__link}
                                to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink></span>
                            :
                            <span className={stylesAuth.authTextMin}>Есть аккаунт?<NavLink
                                className={stylesAuth.authTextMin__link}
                                to={LOGIN_ROUTE}>Войдите!</NavLink></span>
                        }
                        <ButtonCustom type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</ButtonCustom>
                    </div>

                </form>
            </div>
        </div>
    )
}
