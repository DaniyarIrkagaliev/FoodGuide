import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../../index";

const Registration = () => {


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [passwordDirty, setPasswordDirty] = useState(false);
    const [usernameDirty, setUsernameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);

    const [usernameError, setUsernameError] = useState('Username не может быть пустым');
    const [passwordError, setPasswordError] = useState('Password не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');


    const loginHandler = (e) => {
        setUsername(e.target.value)
        if (e.target.value.length < 3) {
            setUsernameError("Username должен быть длиннее 3 символов!")
            if (!e.target.value) {
                setUsernameError("Username не может быть пустым!")
            }
        } else {
            setUsernameError('')
        }
    }

    const {store} = useContext(Context)

    const passwordHandler = (e) => {
        setPassword(e.target.value)

        if (e.target.value.length < 3) {
            setPasswordError("Password должен быть длиннее 3 символов!")
            if (!e.target.value) {
                setPasswordError("Password не может быть пустым!")
            }
        } else {
            setPasswordError('')
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("email некоректный!")
        } else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true)
                break
            case "login":
                setUsernameDirty(true)
                break
            case "password":
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div>
            <div className="login-box">

                <span className="text-center">Регистрация</span>

                <div className="input-container">
                    {(emailDirty && emailError) && <div className="error-text"> {emailError}</div>}
                    {(usernameDirty && usernameError) && <div className="error-text"> {usernameError}</div>}
                    {(passwordDirty && passwordError) && <div className="error-text"> {passwordError}</div>}
                </div>

                <div className="input-container">
                    <input
                        onBlur={e => blurHandler(e)} onChange={e => loginHandler(e)}
                        value={username} name="username" id="username" className="validate" required="required"/>
                    <label>Логин</label>
                </div>

                <div className="input-container">
                    <input onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)}
                           value={email} name="email" id="email" className="validate" required="required"/>
                    <label>Email</label>
                </div>

                <div className="input-container">
                    <input onBlur={e => blurHandler(e)} onChange={e => passwordHandler(e)}
                           value={password} name="password" id="password" type="password"
                           className="validate"
                           required="required"/>
                    <label>Пароль</label>
                </div>

                <button onClick={() => store.registration(email, username, password)}
                        className="btn1">
                    Принять
                </button>

                <Link to="/login">
                    <button type="button" className="btn-register">
                        Войти
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Registration;