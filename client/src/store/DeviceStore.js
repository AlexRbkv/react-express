import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
        ];
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
        ];
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000,  rating: 5, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 3, name: 'Iphone 12 pro', price: 25000,  rating: 5, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 4, name: 'Iphone 12 pro', price: 25000,  rating: 5, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 5, name: 'Iphone 12 pro', price: 25000,  rating: 5, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
            {id: 6, name: 'Iphone 12 pro', price: 25000,  rating: 5, image: 'https://www.techinn.com/f/13782/137821860/apple-iphone-12-pro-6gb-128gb-6.1.jpg'},
        ];
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

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}