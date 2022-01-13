import React, {useContext} from 'react';
import styleTypeBar from './typebar.module.css';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

export const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <ul className={styleTypeBar.typeBarList}>
            {
                device.types.map(item =>
                     <li
                         active = {item.id === device.selectedType.id ? 'true' : undefined}
                         onClick={() => device.setSelectedType(item)}
                         key={item.id}
                         className={styleTypeBar.typeBarListItem}>
                         {item.name}
                     </li>
                )
            }
        </ul>
    );
});