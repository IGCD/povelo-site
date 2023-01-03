import { logoutProcess } from "api/loginAPI";
import { LoginContext } from "App";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { SelectPostModal } from "./modal/SelectPostModal";

export const Navigation = ({auth}) => {
    const context = useContext(LoginContext);
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    return (
        <nav>
            {modal ? <SelectPostModal setModal={setModal}/> : <></>}
            <ul className="flex items-center"> 
                {/* <li className={`searchForm flex items-center p-1 rounded-full bg-gray-200 pr-3 pl-2.5`}>
                    <FiSearch/>
                    <input type="text" className={`searchForm inline-block h-2 m-1 bg-transparent border-0 w-10`}/>
                </li> */}
                {auth ?
                        <>
                            <li className="ml-10 whitespace-nowrap cursor-pointer"><Link to="/mypage">마이페이지</Link></li>
                            <li className="ml-10 whitespace-nowrap cursor-pointer" onClick={()=>{setModal(prev => !prev)}}>글쓰기</li>
                            <li className="ml-10 whitespace-nowrap cursor-pointer" onClick={()=>{logoutProcess(context, navigate)}}>로그아웃</li>
                        </> :
                        <>
                            <li className="ml-10 whitespace-nowrap"><Link to="/login">로그인</Link></li>
                            <li className="ml-10 whitespace-nowrap"><Link to="/register">회원가입</Link></li>
                        </>
                }
                
            </ul>
        </nav>
    )
}