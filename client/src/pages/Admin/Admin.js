import React, {useState} from 'react';
import stylesAdmin from './admin.module.css';
import {ButtonCustom} from "../../components/buttons/ButtonCustom";
import {CreateTypes} from "../../components/modals/CreateTypes";
import {CreateBrands} from "../../components/modals/CreateBrands";
import {CreateDevices} from "../../components/modals/CreateDevices";

export const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <div className={stylesAdmin.adminContentWrap}>
            <div className={stylesAdmin.adminBtnsWrap}>
                <ButtonCustom onClick={() => setTypeVisible(true)}>Добавить тип</ButtonCustom>
                <ButtonCustom onClick={() => setBrandVisible(true)}>Доабвить бренд</ButtonCustom>
                <ButtonCustom onClick={() => setDeviceVisible(true)}>Доабвить устройство</ButtonCustom>
            </div>
            <CreateTypes show={typeVisible.toString()} onHide={() => setTypeVisible(false)}/>
            <CreateBrands show={brandVisible.toString()} onHide={() => setBrandVisible(false)}/>
            <CreateDevices show={deviceVisible.toString()} onHide={() => setDeviceVisible(false)}/>
        </div>
    );
}

