import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import stylesDeviceList from "./devicelist.module.css";
import {DeviceItem} from "../deviceItem/DeviceItem";


export const DeviceList = observer(() => {
    const {device} = useContext(Context);
    return (
        <div className={stylesDeviceList.deviceListGrid}>
            {device.devices.map(item =>
                <DeviceItem key={item.id} device={item}/>
            )}
        </div>
    );
});