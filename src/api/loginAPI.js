import jwtDecode from "jwt-decode";
import { removeCookie } from "utils/cookie";


export const isLogin = () => {
    const login = true;
    return login ? true : false;
}
export const loginProcess = (response, context) => {
    const login = isLogin();
    if(!login) {
        const token = response?.access_token;
        context.setLogin(true);
    }
    else {
        alert("Already Login !");
    }
}


export const logoutProcess = (context, navigate) => {
    if(isLogin()){
        removeCookie(process.env.REACT_APP_LOGIN_COOKIE);
        context.setLogin(false);
    }
    navigate("/");
}