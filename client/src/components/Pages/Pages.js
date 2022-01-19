import React, {useContext} from 'react';
import stylesPages from './pages.modul.css';
import {Context} from "../../index";
import { Pagination } from 'antd';
import {observer} from "mobx-react-lite";

const Pages = observer(() => {
    const {device} = useContext(Context);

    return (
        <Pagination
            current={device.currentPage}
            total={device.totalCount}
            pageSize={device.limit}
            onChange={(value) => {device.setCurrentPage(value)}}
        />
    );
});

export default Pages;