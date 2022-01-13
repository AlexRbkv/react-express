import React from 'react';
import stylesShop from './shop.module.css';
import {TypeBar} from "../../components/typebar/TypeBar";
import {BrandBar} from "../../components/brandbar/BrandBar";
import {DeviceList} from "../../components/deviceList/DeviceList";

export const Shop = () => {
    return (
        <div className={stylesShop.shopContentWrap}>
            <TypeBar/>
            <div className={stylesShop.shopPanelWrap}>
                <BrandBar/>
                <DeviceList/>
            </div>
        </div>
    )
}

