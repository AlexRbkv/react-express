import React from 'react';
import styles from './buttonCustom.module.css';

const ButtonCustom = ({type, children}) => {
    return (
        <button type={type} className={styles.buttonCustom}>{children}</button>
    );
};

export default ButtonCustom;