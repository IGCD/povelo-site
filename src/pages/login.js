import { loginProcess } from "api/loginAPI";
import { LoginContext } from "App";
import axios from "axios";
import { PasswordInput, SubmitButton, TextInput } from "components/form/input";
import { projectName } from "const/projectInfo";
import { memo, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SocialLoginButton = ({url, label}) => {
    return (
        <div className="w-full p-3 flex items-center justify-center mt-5 border border-gray-300 rounded-sm cursor-pointer" onClick={()=>{alert("미구현기능")}}>
            <img src={url} alt="social-icons" className="w-8 h-8 mr-5"/>
            <span className=" w-48 text-base text-gray-600">{label}</span>
        </div>
    )
}
const Login = () => {
    const navigate = useNavigate();
    const context = useContext(LoginContext);
    const idRef = useRef(null);
    const pwRef = useRef(null);
    
    const sosialLoginList = [
        {
            id : 1,
            label : "카카오계정으로 로그인",
            url : "assets/images/kakao-icon.png"
        },
        {
            id : 2,
            label : "구글계정으로 로그인",
            url : "assets/images/google-icon.png"
        },
        {
            id : 3,
            label : "애플계정으로 로그인",
            url : "assets/images/apple-logo.png"
        },
    ]

    const loginHandler = (e) => {
        e.preventDefault();

        if(idRef.current && pwRef.current) {
            const URL = process.env.REACT_APP_API_BASE_URL + "auth/login";
            const submitData = { email : idRef.current.value, password : pwRef.current.value }

            axios.post(URL, submitData)
                .then(res => {
                    console.log(res.data);
                    //loginProcess(res.data, context);
                    //navigate("/");
                })
                .catch(err =>{
                    console.log(err);
                })
        }
    }
    return (
        <div className="container max-w-xl">
            <h2 className=" text-center text-4xl text-gray-700 font-bold m-10">{projectName}</h2>
            <form onSubmit={(e)=>{loginHandler(e)}}>
                <TextInput ref={idRef} label="이메일" id="login-id"/>
                <PasswordInput ref={pwRef} label="비밀번호" id="login-password"/>
                <SubmitButton label={"로그인"}/>
            </form>
            <div className=" text-sm text-gray-500 mt-4">
                아직 계정이 없으신가요? 
                <Link className="ml-2 text-blue-500 hover:text-blue-400 font-semibold" to="/register">
                    회원가입하기
                </Link>
            </div>
            <div className=" mt-20">
                <h2 className=" text-center text-gray-500">또는</h2>
                {sosialLoginList.map(data => <SocialLoginButton key={data.id} label={data.label} url={data.url}/>)}
            </div>
        </div>
    )
}

export default memo(Login);