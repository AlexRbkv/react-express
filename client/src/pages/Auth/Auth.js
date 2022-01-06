import React from 'react';
import styles from './auth.module.css';
import InputCustom from "../../components/inputs/InputCustom";
import ButtonCustom from "../../components/buttons/ButtonCustom";

const Auth = () => {

    return <div className={styles.authContainer} style={{height: window.innerHeight - 100}}>
                <div className={styles.authWrap}>
                    <span className={styles.authCaption}>Авторизация</span>
                    <form className={styles.authForm}>
                        <InputCustom type='text' placeholder='Введите email'/>
                        <InputCustom type='text' placeholder='Введите пароль'/>
                        <ButtonCustom type="submit">Войтиgit branch</ButtonCustom>
                    </form>
                </div>
            </div>;
};

export default Auth;
