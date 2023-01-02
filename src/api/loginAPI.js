import axios from "axios";

export const isLogin = () => {
    const login = axios.defaults.headers.common["Authorization"];
    return login ? true : false;
}

export const loginProcess = (response, context) => {
    const login = isLogin();
    if(!login) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${response?.access_token}`;
        context.setLogin(true);
        //sessionStorage.setItem(process.env.REACT_APP_LOGIN_STORAGE, response?.access_token);
    }
    else {
        alert("Already Login !");
    }
}


export const logoutProcess = (context, navigate) => {
    axios.defaults.headers.common["Authorization"] = undefined;
    context.setLogin(false);
    navigate("/");
}