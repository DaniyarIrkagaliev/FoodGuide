import {makeAutoObservable} from "mobx";
import $api, {API_URL} from "../http";
import AuthService from "../http/authService";
import axios from "axios";

export default class UserStore {

    user = {};
    isAuth = false;
    isLoading = false;
    rests = [];

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool
    }


    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);

            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
            console.log(response)
        } catch (e) {
            console.log(e.response.data.message);
        }
    }

    async registration(email, username, password) {
        try {
            const response = await AuthService.registration(email, username, password);
            localStorage.setItem('token', response.data.accessToken);
            // console.log(response)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response.data.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e.response.data.message);
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            console.log(response)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {

            console.log(e.response.data.message);
        } finally {
            this.setLoading(false)
        }
    }


}