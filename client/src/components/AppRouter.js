import React, {useContext} from 'react';
import { Routes, Route} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Element }) => {
                return <Route key={path} path={path} element={Element}/>
            })};
            {publicRoutes.map(({ path, Element }) => {
                return <Route key={path} path={path} element={Element}/>
            })};
        </Routes>
    );
};

export default AppRouter;
