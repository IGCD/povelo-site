import { removeCookie } from "utils/cookie";

export const logoutProcess = (context, navigate) => {
    removeCookie(process.env.REACT_APP_LOGIN_COOKIE);
    context.setLogin(false);
    navigate("/");
}