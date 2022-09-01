import axios, { Axios } from "axios";
import {API_URL,JPA_API_URL} from '../../Constant.js'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
class AuthenticationService
{
    registerSucessfulLogedIN(username, password) {
        /*let username = "user"
        let password = 'password'*/
        //let basicAuthHeader = 'Basic ' + window.btoa(`${username}` + ":" + `${password}`)
        //console.log("registerSucessfulLogedIN");
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptor(this.createBasicAuthenticationToken(username, password))
    }

    registerSucessfulLoginForJwtToken(username,token)
    {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptor(this.createJwtToken(token))
    }

    logout() {
        //console.log("logout");
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLogedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        // console.log(user)
        if (user === null) return false
        return true
    }

    loggedinUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        if (user == null) return null;
        return user;
    }

    setupAxiosInterceptor(token) {


        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLogedIn()) {
                    config.headers.authorization = token;
                }
                return config
            }
        )
    }

    createBasicAuthenticationToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    createJwtToken(token)
    {
        return 'Bearer ' + token
    }

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`, {
            header: {
                authorization: this.createBasicAuthenticationToken(username, password)

            }
        })
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }
}
export default new AuthenticationService()