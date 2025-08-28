import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './Styles.scss';
import App from './App';

import {BrowserRouter as Router} from "react-router-dom";
import UserStore from "./store/UserStore";
import RestaurantStore from "./store/RestaurantStore";


export const Context = createContext(
    null
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            restaurant: new RestaurantStore()
        }}>
            <Router>
                <App/>
            </Router>
        </Context.Provider>
    </React.StrictMode>
);

