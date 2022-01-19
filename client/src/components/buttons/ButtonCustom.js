import React from 'react';
import stylesButton from './buttonCustom.module.css';

export const ButtonCustom = ({type, children, ...child}) =>
        <button type={type} {...child} className={stylesButton.buttonCustom}>{children}</button>
