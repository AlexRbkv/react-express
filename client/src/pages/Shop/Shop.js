import React, {useContext, useEffect} from 'react';
import stylesShop from './shop.module.css';
import {TypeBar} from "../../components/typebar/TypeBar";
import {BrandBar} from "../../components/brandbar/BrandBar";
import {DeviceList} from "../../components/deviceList/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchTypes, fetchBrands, fetchDevices} from "../../http/deviceAPI";
import Pages from "../../components/Pages/Pages";

export const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices(null, null, 1 , 2).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        })
    }, []);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.currentPage , 2).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        })
    }, [device.currentPage, device.selectedType, device.selectedBrand]);

    return (
        <div className={stylesShop.shopContentWrap}>
            <TypeBar/>
            <div className={stylesShop.shopPanelWrap}>
                <BrandBar/>
                <DeviceList/>
                <Pages/>
            </div>
        </div>
    )
});

