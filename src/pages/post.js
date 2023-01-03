import axios from "axios";
import { memo, useCallback, useRef } from "react"
import { PostEditer } from "../components/PostEditer";
const Post = () => {
    const quillRef = useRef();

    const submitHandler = useCallback(() => {
        if(quillRef.current) {
            console.log(quillRef.current.value);
            //axios.post()
        }
    }, [])
    return (
        <div className="container">
            <h2 className="relaitve mb-5 text-2xl font-semibold">글쓰기</h2>
            <form className="relaitve w-full">
                <PostEditer ref={quillRef}/>
            </form>
            <footer className="relaitve w-full bg-opacity-70 flex items-center mt-10">
                <div className="w-full flex justify-end">
                    <button className="p-2 pr-6 pl-6 border border-gray-400 bg-white  inline-block rounded-full text-sm mr-3">취소</button>
                    <button onClick={()=>{submitHandler()}} className="p-2 pr-6 pl-6 bg-black text-white rounded-full text-sm">저장하기</button>
                </div>
            </footer>
        </div>
    )
}

export default memo(Post);