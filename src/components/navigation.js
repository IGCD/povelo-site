import { useState } from "react"
import { Link } from "react-router-dom"
import { SelectPostModal } from "./modal/SelectPostModal";

export const Navigation = () => {
    const [modal, setModal] = useState(false);
    return (
        <nav>
            {modal ? <SelectPostModal setModal={setModal}/> : <></>}
            <ul className="flex">
                <li className="ml-10 whitespace-nowrap"><Link to="/">마이페이지</Link></li>
                <li className="ml-10 whitespace-nowrap cursor-pointer" onClick={()=>{setModal(prev => !prev)}}>글쓰기</li>
                <li className="ml-10 whitespace-nowrap"><Link to="/login">로그인</Link></li>
            </ul>
        </nav>
    )
}