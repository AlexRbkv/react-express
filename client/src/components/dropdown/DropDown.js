import React from 'react';
import stylesDropDown from './dropDown.module.css';

export const DropDown = ({content, name}) => {
    return (
        <div className={stylesDropDown.dropDownWrap}>
            <label htmlFor={"customDropDown"} className={stylesDropDown.dropDownCaption}>{name}:</label>
            <select name="customDropDown">
                {
                    content.map((item) =>
                        <option key={item.id}>{item.name}</option>
                    )
                }
            </select>
        </div>

);
};
