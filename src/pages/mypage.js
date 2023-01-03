import axios from "axios"
import { memo, useEffect } from "react"

const MyPage = () => {
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_BASE_URL + "dd", {
            headers : {
                withCredentials: true,
            }
        })
    }, [])
    return (
        <div className="container">
            My Page
        </div>
    )
}

export default memo(MyPage);