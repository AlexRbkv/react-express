import React, {useContext, useEffect, useState} from "react";
import AppRouter from './components/AppRouter';
import {Navbar} from './components/navbar/Navbar';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from './http/userAPI';

export const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(true);
                user.setIsAuth(true);
            }).finally(() => setLoading(false));
        }, 1000)
    }, [])

    if (loading) {
        return <div>load</div>
    }

    return (
        <React.Fragment>
            <Navbar />
            <main>
                <AppRouter />
            </main>
        </React.Fragment>
    );
});
