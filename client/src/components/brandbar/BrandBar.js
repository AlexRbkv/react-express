import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import stylesBrandBar from './brandbar.module.css';

export const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <div className={stylesBrandBar.brandBarWrap}>
            {device.brands.map(item =>
                 <div
                     key={item.id}
                     active={item.id === device.selectedBrand.id ? 'true' : undefined}
                     onClick={() => device.setSelectedBrand(item)}
                     className={stylesBrandBar.brandBarItem}
                 >
                     {item.name}
                 </div>
            )}
        </div>
    );
});