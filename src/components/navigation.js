import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav>
            <ul className="flex">
                <li className="ml-10 whitespace-nowrap"><Link to="/">홈으로</Link></li>
                <li className="ml-10 whitespace-nowrap"><Link to="/post">글쓰기</Link></li>
                <li className="ml-10 whitespace-nowrap"><Link to="/login">로그인</Link></li>
            </ul>
        </nav>
    )
}