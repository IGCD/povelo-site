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
                    alert("??????????????? ?????????????????????.");
                    console.log(res);
                    navigate("/");
                })
                .catch(err => {
                    alert(err.response.data.message);
                })
            }
            else {
                alert("?????? ??????????????? ????????????");
                return false;
            }
            
        }
        
        
    }

    return (
        <div className="container max-w-xl">
            <form onSubmit={(e)=>{registerHandler(e)}}>
            <h2 className=" text-center text-2xl text-gray-700 font-bold m-10">{"????????????"}</h2>
            <TextInput ref={idRef} label="?????????" id="reg-id" checkFunc={idCheckHandler}/>
            {!idStatus ? <CheckTextForm text={"???????????? ????????? ?????????????????????. ( example@povelo.com )"}/> : null}

            <PasswordInput ref={pwRef} label="????????????" id="reg-pw" checkFunc={pwCheckHandler}/>
            {!pwStatus ? <CheckTextForm text={"??????????????? 9?????? ??????????????? ?????? ??? ?????? ???????????? ????????????(!, @, #)??? ?????????????????????."}/> : null}

            <TextInput ref={nameRef} label="??????" id="reg-name" />

            <TextInput ref={numberRef} label="?????????" id="call-number" />
            <SubmitButton label={"????????????"}/>
            </form>
        </div>
    )
}

export default Register;