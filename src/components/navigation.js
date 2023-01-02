import { isLogin, logoutProcess } from "api/loginAPI";
import { useState } from "react"
import { Link } from "react-router-dom"
import { SelectPostModal } from "./modal/SelectPostModal";

export const Navigation = () => {
    const [modal, setModal] = useState(false);
    const auth = isLogin();
    
    return (
        <nav>
            {modal ? <SelectPostModal setModal={setModal}/> : <></>}
            <ul className="flex">
                {
                    auth ?
                        <>
                            <li className="ml-10 whitespace-nowrap cursor-pointer"><Link to="/">마이페이지</Link></li>
                            <li className="ml-10 whitespace-nowrap cursor-pointer" onClick={()=>{setModal(prev => !prev)}}>글쓰기</li>
                            <li className="ml-10 whitespace-nowrap cursor-pointer" onClick={()=>{logoutProcess()}}>로그아웃</li>
                        </> 
                    :
                        <>
                            <li className="ml-10 whitespace-nowrap"><Link to="/login">로그인</Link></li>
                            <li className="ml-10 whitespace-nowrap"><Link to="/register">회원가입</Link></li>
                        </>
                }
                
            </ul>
        </nav>
    )
}