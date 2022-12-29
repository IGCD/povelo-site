import { memo, useCallback, useMemo, useRef } from "react"
import { PostEditer } from "../components/PostEditer";
const Post = () => {
    const quillRef = useRef();

    const submitHandler = useCallback(() => {
        if(quillRef.current) {
            console.log(quillRef.current.value);
        }
    }, [])
    return (
        <div className="container">
            <h2 className="mb-5 text-2xl font-semibold">글쓰기</h2>
            <form className="w-full">
                <PostEditer ref={quillRef}/>
            </form>
            <footer className="fixed bottom-0 left-0 w-full h-20 bg-gray-600 bg-opacity-70 flex items-center">
                <div className="container flex justify-end">
                    <button className="p-2 pr-6 pl-6 border border-gray-400 bg-white  inline-block rounded-full text-sm mr-3">취소</button>
                    <button onClick={()=>{submitHandler()}} className="p-2 pr-6 pl-6 bg-black text-white rounded-full text-sm">저장하기</button>
                </div>
            </footer>
        </div>
    )
}

export default memo(Post);