import jwtDecode from "jwt-decode";
import { removeCookie, setCookie } from "utils/cookie";

export const storageName = "login-email";

export const isLogin = () => {
    const login = localStorage.getItem(storageName);
    return login ? true : false;
}
export const loginProcess = (response, context) => {
    const login = isLogin();
    if(!login) {
        const token = response?.access_token;
        setCookie(process.env.REACT_APP_LOGIN_COOKIE, token, {httpOnly : true}); //`Bearer ${response?.access_token}`
        const data = jwtDecode(token);
        localStorage.setItem(storageName, data.email);
        console.log(data);
        context.setLogin(true);
    }
    else {
        alert("Already Login !");
    }
}


export const logoutProcess = (context, navigate) => {
    if(isLogin()){
        localStorage.removeItem(storageName);
        removeCookie(process.env.REACT_APP_LOGIN_COOKIE);
        context.setLogin(false);
    }
    navigate("/");
}