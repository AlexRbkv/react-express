import React, {useContext, useState} from 'react';
import stylesAuth from './auth.module.css';
import {InputCustom} from "../../components/inputs/InputCustom";
import {ButtonCustom} from "../../components/buttons/ButtonCustom";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {login, registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

export const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    let navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (event) {
            alert(event.response.data.message);
        }

    }

    return (
        <div className={stylesAuth.authContainer}>
            <div className={stylesAuth.authWrap}>
                <span className={stylesAuth.authCaption}>{isLogin ? 'Авторизация' : 'Регистрация'}</span>
                <form className={stylesAuth.authForm}>
                    <input type='text' placeholder='Введите email' value={email} onChange={event => setEmail(event.target.value)}/>
                    <input type='text' placeholder='Введите пароль' value={password} onChange={event => setPassword(event.target.value)}/>
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
                        <ButtonCustom onClick={click} type="button">{isLogin ? 'Войти' : 'Зарегистрироваться'}</ButtonCustom>
                    </div>

                </form>
            </div>
        </div>
    )
})
