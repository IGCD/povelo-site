import { useEffect } from "react"
import { Link } from "react-router-dom";

export const SelectPostModal = ({setModal}) => {
    useEffect(()=>{
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.removeProperty('overflow');
        }
    }, [])
    return (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50 viewport-100vh">
            <div className="px-20 py-12  bg-white flex flex-col justify-center items-center max-md:px-10 max-md:my-10">
                <h2 className=" font-semibold text-lg mb-10">어떤 글을 쓰고싶으신가요?</h2>
                <div className="flex flex-col relative w-full">
                    <Link onClick={()=>{setModal(prev => !prev)}} to="post">
                        <button className="py-2 mb-2 w-full bg-black text-white rounded-full">포트폴리오</button>
                    </Link>
                    <Link onClick={()=>{setModal(prev => !prev)}} to="post">
                        <button className="py-2 mb-2 w-full bg-black text-white rounded-full">프로젝트</button>
                    </Link>
                    <Link onClick={()=>{setModal(prev => !prev)}} to="post">
                        <button className="py-2 mb-2 w-full bg-black text-white rounded-full">게시글</button>
                    </Link>
                </div>
                <div className="mt-10 underline underline-offset-4 text-gray-500 cursor-pointer" onClick={()=>{setModal(prev => !prev)}}>닫기</div>
            </div>
        </div>
    )
}