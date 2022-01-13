import React from "react";
import AppRouter from './components/AppRouter';
import {Navbar} from './components/navbar/Navbar';

export const App = () =>
        <React.Fragment>
            <Navbar />
            <main>
                <AppRouter />
            </main>
        </React.Fragment>
