import { removeCookie } from "utils/cookie";

export const logoutProcess = (context, navigate) => {
    sessionStorage.removeItem("login");
    context.setLogin(-1);
    navigate("/");
}