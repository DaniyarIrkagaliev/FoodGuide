import React, {useContext, useState} from 'react';

import {Link, Navigate} from "react-router-dom";

import "./auth-styles.scss"
import {Context} from "../../index";

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()

    const {store} = useContext(Context)

    return (
        <div>
            <div className="login-box">
                <span className="text-center">Вход</span>
                <div className="input-container">
                    <input
                        type="text"
                        name="email" id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>

                <div className="input-container">
                    <input name="password" id="password" type="password" className="validate"
                           onChange={e => setPassword(e.target.value)}
                           value={password}
                           required="required"/>
                    <label>Пароль</label>
                </div>

                <button onClick={() => store.login(email, password)}
                        className="btn1">
                    Войти
                </button>

                <Link to="/registration">
                    <button type="button" className="btn-register">
                        Регистрация
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Login;