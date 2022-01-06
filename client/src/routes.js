import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE } from './utils/consts';
import Admin from "./pages/Admin";
import Auth from "./pages/Auth/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin/>,
    },
    {
        path: BASKET_ROUTE,
        Element: <Basket/>,
    },
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: <Auth/>,
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Auth/>,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Element: <DevicePage/>,
    },
    {
        path: SHOP_ROUTE,
        Element: <Shop/>,
    }
];
