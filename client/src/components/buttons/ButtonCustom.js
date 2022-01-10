import React from 'react';
import stylesButton from './buttonCustom.module.css';

export const ButtonCustom = ({type, children}) =>
        <button type={type} className={stylesButton.buttonCustom}>{children}</button>
