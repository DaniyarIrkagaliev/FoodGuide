import $api from "./index";
import {AxiosResponse} from "axios";


export default class AuthService {


    // static async login(username, password): Promise {
    static async login(email, password) {
        return $api.post('/login', {email, password})
    }

    static async logout() {
        return $api.post('/logout')
    }

    static async registration(email, username, password) {
        return $api.post('/registration', {email, username, password})
    }
}
