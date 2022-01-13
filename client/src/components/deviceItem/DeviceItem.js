import React from 'react';
import stylesDeviceItem from './deviceitem.module.css';
import star from '../../assets/star.svg';
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/consts";


export const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <div className={stylesDeviceItem.deviceItemCard} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <img className={stylesDeviceItem.deviceItemImage} src={device.image} alt="device image"/>
            <div className={stylesDeviceItem.deviceItemDescriptionWrap}>
                <div className={stylesDeviceItem.deviceDescrRow}>
                    <h1 className={stylesDeviceItem.deviceItemName}>{device.name}</h1>
                    <div className={stylesDeviceItem.deviceItemRatingWrap}>
                        <h1 className={stylesDeviceItem.deviceItemRating}>{device.rating}</h1>
                        <object type="image/svg+xml" data={star} className={stylesDeviceItem.deviceItemRatingStar}>Your browser does not support SVG</object>
                    </div>
                </div>
                <h1 className={stylesDeviceItem.deviceItemPrice}>{device.price}</h1>
            </div>
        </div>
    );
};