import React, {useState} from 'react';
import styles from './inputCustom.module.css';

const InputCustom = ({...children}) => {

    const [inputValue, setInputValue] = useState('');

    const handleValueChange = (e) => {
        setInputValue( e.target.value);
    }

    return (
        <input {...children} className={styles.inputCustom} onChange={handleValueChange}/>
    );
};

export default InputCustom;