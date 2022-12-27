import { memo } from "react"
import { PostEditer } from "../components/PostEditer";
const Post = () => {
    return (
        <div className="container">
            <h2 className="mb-5 text-2xl font-semibold">글쓰기</h2>
            <PostEditer/>
        </div>
    )
}

export default memo(Post);