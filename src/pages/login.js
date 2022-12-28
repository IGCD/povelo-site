import axios from "axios";
import { PasswordInput, SubmitButton, TextInput } from "components/form/input";
import { memo, useRef } from "react"
import { Link } from "react-router-dom";

const Login = () => {
    const idRef = useRef(null);
    const pwRef = useRef(null);
    
    const loginHandler = (e) => {
        e.preventDefault();

        if(idRef.current && pwRef.current) {
            axios.post()
            .then(res => {
                console.log(res.data);
            })
            .catch(err =>{
                console.log(err);
            })
        }
    }
    return (
        <div className="container max-w-3xl">
            <h2 className=" text-2xl font-semibold">로그인하기</h2>
            <form onSubmit={(e)=>{loginHandler(e)}}>
                <TextInput ref={idRef} label="아이디"/>
                <PasswordInput ref={pwRef} label="비밀번호"/>
                <SubmitButton label={"로그인"}/>
            </form>
            <div className=" text-sm text-gray-500 mt-4">아직 계정이 없으신가요? <Link className="ml-2 text-blue-500 hover:text-blue-400 font-semibold" to="/login">회원가입하기</Link></div>
        </div>
    )
}

export default memo(Login);