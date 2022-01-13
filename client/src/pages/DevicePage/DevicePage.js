import React from 'react';
import stylesDevicePage from './devicePage.module.css';
import {ButtonCustom} from "../../components/buttons/ButtonCustom";
import star from '../../assets/star.svg';

export const DevicePage = () => {
    const item = {id: 1, name: 'Iphone 12 pro', price: 25000,  rating: 5.0, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'};
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб' },
        {id: 2, title: 'Камера', description: '12 мп' },
        {id: 3, title: 'Процессор', description: 'Pentium 3' },
        {id: 4, title: 'Кол-во ядер', description: '2' },
        {id: 5, title: 'Аккумулятор', description: '4000' },
    ];
    return (
        <div className={stylesDevicePage.devicePageContainer}>
            <div className={stylesDevicePage.devicePageCard}>
                <div className={stylesDevicePage.devicePageMainInfoWrap}>
                    <img className={stylesDevicePage.devicePageImage} src={item.image}/>
                    <div className={stylesDevicePage.devicePageMainInfo}>
                        <h1 className={stylesDevicePage.devicePageName}>{item.name}</h1>
                        <h1 className={stylesDevicePage.devicePagePrice}>Цена: {item.price} руб.</h1>
                        <ButtonCustom>В корзину</ButtonCustom>
                        <div className={stylesDevicePage.devicePageRatingWrap}>
                            <h1 className={stylesDevicePage.devicePageRating}>{item.rating}</h1>
                            <img className={stylesDevicePage.devicePageRatingStar} src={star} alt="device image"/>
                        </div>
                    </div>
                </div>
                <div className={stylesDevicePage.devicePageCharactersWrap}>
                    <h1 className={stylesDevicePage.devicePageCharactersCaption}>Характеристики</h1>
                    <ul className={stylesDevicePage.devicePageCharactersList}>
                        {description.map(item => {
                            return <li key={item.id}>{item.title}: {item.description}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

