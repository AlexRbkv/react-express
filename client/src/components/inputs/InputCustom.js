import React, {useState} from 'react';
import stylesInput from './inputCustom.module.css';

export const InputCustom = ({...children}) => {

    const [, setInputValue] = useState('');

    const handleValueChange = (event) => {
        setInputValue( event.target.value);
    }

    return  <input {...children} className={stylesInput.inputCustom} onChange={handleValueChange}/>
};