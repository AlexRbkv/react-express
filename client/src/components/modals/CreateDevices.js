import React, {useContext, useEffect, useRef, useState} from 'react';
import stylesModal from "./modal.module.css";
import {InputCustom} from "../inputs/InputCustom";
import {ButtonCustom} from "../buttons/ButtonCustom";
import {Context} from "../../index";
import stylesDropDown from "../dropdown/dropDown.module.css";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Dropdown,Menu} from 'antd';
import 'antd/dist/antd.css';

export const CreateDevices = observer(({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    let id = 0;

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, [])

    const addInfo = () => {
        return setInfo([...info, {title: "", description: "", number: Date.now()}]);
    }

    const removeInfo = (number) => {
        return setInfo(info.filter(i => i.number !== number));
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (event) => {
        setFile(event.target.files[0]);
    }

    const addDevice = () => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append("image", file, `${Date.now()}.jpg`);
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    const refForm = useRef();

    const menu1 = (
        <Menu>
            {
                device.types.map((type) => {
                    return <Menu.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Menu.Item>
                })
            }
        </Menu>
    );
    const menu2 = (
        <Menu>
            {
                device.brands.map((brand) => {
                    return <Menu.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Menu.Item>
                })
            }
        </Menu>
    );

    return (
        <div
            show={show}
            className={stylesModal.modalContainer}
        >
            <div className={stylesModal.modalContentWrap}>
                <h1 className={stylesModal.modalCaption}>Добавить устройство</h1>
                <form ref={refForm} className={stylesModal.modalForm}>
                    <Dropdown overlay={menu1}>
                        <span>1</span>
                    </Dropdown>
                    <Dropdown overlay={menu2}>
                        <span>1</span>
                    </Dropdown>
                    <input type="text" placeholder="Введите имя устройства"
                           value={name}
                           onChange={event => setName(event.target.value)}
                    />
                    <input type="number" placeholder="Укажите стоимость устройства"
                           value={price}
                           onChange={event => setPrice(Number(event.target.value))}
                    />
                    <input onChange={selectFile} type="file"/>
                    <hr color="#2F4F4F" size="1" width="100%"/>
                    <ButtonCustom type="button" onClick={addInfo}>Добавить свойство</ButtonCustom>
                    {
                        info.map(i =>
                            <div key={i.number} className={stylesModal.modalFeatureRow}>
                                <input
                                    value={i.title}
                                    onChange={event => changeInfo('title', event.target.value, i.number)}
                                    type="text"
                                    placeholder="название"
                                />
                                <input
                                    value={i.description}
                                    onChange={event => changeInfo('description', event.target.value, i.number)}
                                    type="text"
                                    placeholder="описание"
                                />
                                <ButtonCustom onClick={() => removeInfo(i.number)} type="button">Удалить</ButtonCustom>
                            </div>
                        )
                    }
                </form>
                <div className={stylesModal.modalFooter}>
                    <ButtonCustom onClick={addDevice}>Добавить</ButtonCustom>
                    <ButtonCustom onClick={onHide}>Закрыть</ButtonCustom>
                </div>
            </div>
        </div>
    );
});