export const isLogin = () => {
    const login = sessionStorage.getItem(process.env.REACT_APP_LOGIN_STORAGE);
    if(login) {
        return login;
    }
    else {
        return false;
    }
    
}


export const loginProcess = (response) => {
    const login = isLogin();
    if(!login) {
        sessionStorage.setItem(process.env.REACT_APP_LOGIN_STORAGE, response);
        
    }
    else {
        alert("Already Login !");
    }
}


export const logoutProcess = () => {
    sessionStorage.removeItem(process.env.REACT_APP_LOGIN_STORAGE);
    window.location.href = "/";
}