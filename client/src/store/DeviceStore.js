import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
            {id: 5, name: 'Стиральные машины'},
            {id: 6, name: 'Планшеты'},
            {id: 7, name: 'Кондеционеры'},

        ];
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'LG'},
            {id: 4, name: 'Huawei'},
            {id: 5, name: 'Lenovo'},
            {id: 6, name: 'Redmi'},
            {id: 7, name: 'Asus'},
        ];
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000,  rating: 5.0, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 2, name: 'Iphone 12 pro', price: 25000,  rating: 5.0, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 3, name: 'Iphone 12 pro', price: 25000,  rating: 5.0, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 4, name: 'Iphone 12 pro', price: 25000,  rating: 5.0, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 5, name: 'Iphone 12 pro', price: 25000,  rating: 5.0, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 6, name: 'Iphone 12 pro', price: 25000,  rating: 5.0, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 7, name: 'Iphone 12 pro', price: 25000,  rating: 5.0, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}