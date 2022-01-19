import React, {useEffect, useState} from 'react';
import stylesDevicePage from './devicePage.module.css';
import {ButtonCustom} from "../../components/buttons/ButtonCustom";
import star from '../../assets/star.svg';
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../../http/deviceAPI";

export const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data));
    }, [])
    return (
        <div className={stylesDevicePage.devicePageContainer}>
            <div className={stylesDevicePage.devicePageCard}>
                <div className={stylesDevicePage.devicePageMainInfoWrap}>
                    <img className={stylesDevicePage.devicePageImage} src={process.env.REACT_APP_API_URL + device.image}/>
                    <div className={stylesDevicePage.devicePageMainInfo}>
                        <h1 className={stylesDevicePage.devicePageName}>{device.name}</h1>
                        <h1 className={stylesDevicePage.devicePagePrice}>Цена: {device.price} руб.</h1>
                        <ButtonCustom>В корзину</ButtonCustom>
                        <div className={stylesDevicePage.devicePageRatingWrap}>
                            <h1 className={stylesDevicePage.devicePageRating}>{device.rating}</h1>
                            <img className={stylesDevicePage.devicePageRatingStar} src={star} alt="device image"/>
                        </div>
                    </div>
                </div>
                <div className={stylesDevicePage.devicePageCharactersWrap}>
                    <h1 className={stylesDevicePage.devicePageCharactersCaption}>Характеристики</h1>
                    <ul className={stylesDevicePage.devicePageCharactersList}>
                        {device.info.map(item => {
                            return <li key={item.id}>{item.title}: {item.description}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

