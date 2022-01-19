import React, {useState} from 'react';
import stylesModal from './modal.module.css';
import {ButtonCustom} from "../buttons/ButtonCustom";
import {createType} from '../../http/deviceAPI';

export const CreateTypes = ({show, onHide}) => {

    const[value, setValue] = useState('');


    const addType = () => {
        createType({name: value}).then(data => {
            setValue('');
            onHide();
        });
    }

    return (
        <div
            show={show}
            className={stylesModal.modalContainer}
        >
            <div className={stylesModal.modalContentWrap}>
                <h1 className={stylesModal.modalCaption}>Добавить тип</h1>
                <form>
                    <input type="text" value={value} onChange={event => setValue(event.target.value)} placeholder="Введите название типа"/>
                </form>
                <div className={stylesModal.modalFooter}>
                    <ButtonCustom onClick={addType}>Добавить</ButtonCustom>
                    <ButtonCustom onClick={onHide}>Закрыть</ButtonCustom>
                </div>
            </div>
        </div>
    );
};