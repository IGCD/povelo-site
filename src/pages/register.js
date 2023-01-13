import axios from "axios";
import { PasswordInput, SubmitButton, TextInput } from "components/form/input";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const idRef = useRef(null);
    const [idStatus, setIdStatus] = useState(true);

    const pwRef = useRef(null);
    const [pwStatus, setPwStatus] = useState(true);
    const nameRef = useRef(null);
    const numberRef = useRef(null);


    const idCheckHandler = () => {
        if(idRef.current) {
            const idReg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if(idReg.test(idRef.current.value) || idRef.current.value === "") {
                setIdStatus(prev => true);
            } else {
                setIdStatus(prev => false);
            }
        }
    }

    const pwCheckHandler = () => {
        if(pwRef.current) {
            const pwReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if(pwReg.test(pwRef.current.value) || pwRef.current.value === "") {
                setPwStatus(prev => true);
            } else {
                setPwStatus(prev => false);
            }
        }
    }
    const CheckTextForm = ({text}) => {
        return (<div className=" text-red-400 text-sm mt-1">{text}</div>)
    }

    const registerHandler = (e) => {
        e.preventDefault();
        if(idRef.current && pwRef.current && numberRef.current) {

            if(idStatus && 
                pwStatus && 
                idRef.current.value !== "" && 
                pwRef.current.value !== "" && 
                nameRef.current.value !== "" &&
                numberRef.current.value !== "") 
                {

                const formatData = {
                    email : idRef.current.value,
                    password : pwRef.current.value,
                    name : nameRef.current.value,
                    phoneNumber : numberRef.current.value.replaceAll("-", ""),
                }

                axios.post("/api/regist", formatData)
                .then(res => {
                    alert("회원가입이 완료되었습니다.");
                    console.log(res);
                    navigate("/");
                })
                .catch(err => {
                    alert(err.response.data.message);
                })
            }
            else {
                alert("포멧 안맞으니까 고치세요");
                return false;
            }
            
        }
        
        
    }

    return (
        <div className="container max-w-xl">
            <form onSubmit={(e)=>{registerHandler(e)}}>
            <h2 className=" text-center text-2xl text-gray-700 font-bold m-10">{"회원가입"}</h2>
            <TextInput ref={idRef} label="이메일" id="reg-id" checkFunc={idCheckHandler}/>
            {!idStatus ? <CheckTextForm text={"이메일의 형식이 잘못되었습니다. ( example@povelo.com )"}/> : null}

            <PasswordInput ref={pwRef} label="비밀번호" id="reg-pw" checkFunc={pwCheckHandler}/>
            {!pwStatus ? <CheckTextForm text={"비밀번호는 9글자 이상이어야 하며 한 개의 대문자와 특수문자(!, @, #)를 포함해야합니다."}/> : null}

            <TextInput ref={nameRef} label="이름" id="reg-name" />

            <TextInput ref={numberRef} label="연락처" id="call-number" />
            <SubmitButton label={"회원가입"}/>
            </form>
        </div>
    )
}

export default Register;