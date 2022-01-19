import React, {useState} from 'react';
import stylesModal from "./modal.module.css";
import {InputCustom} from "../inputs/InputCustom";
import {ButtonCustom} from "../buttons/ButtonCustom";
import {createBrand} from "../../http/deviceAPI";

export const CreateBrands = ({show, onHide}) => {

    const [value, setValue] = useState('');

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('');
            onHide();
        })
    }
    return (
        <div
            show={show}
            className={stylesModal.modalContainer}
        >
            <div className={stylesModal.modalContentWrap}>
                <h1 className={stylesModal.modalCaption}>Добавить бренд</h1>
                <div className={stylesModal.modalBody}>
                    <form>
                        <input type="text" value={value} onChange={event => setValue(event.target.value)} placeholder="Введите название бренда"/>
                    </form>
                </div>
                <div className={stylesModal.modalFooter}>
                    <ButtonCustom onClick={addBrand}>Добавить</ButtonCustom>
                    <ButtonCustom onClick={onHide}>Закрыть</ButtonCustom>
                </div>
            </div>
        </div>
    );
};