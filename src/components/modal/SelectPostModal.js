import { useEffect } from "react"

export const SelectPostModal = ({setModal}) => {
    useEffect(()=>{
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.removeProperty('overflow');
        }
    }, [])
    return (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className=" w-3/5 h-1/2 bg-white flex flex-col justify-center items-center">
                <h2 className=" font-semibold text-2xl mb-10">어떤 글을 쓰고싶으신가요?</h2>
                <div className="flex">
                    <button className="pt-3 pb-3 pr-10 pl-10 mr-8 bg-black text-white rounded-full">포트폴리오</button>
                    <button className="pt-3 pb-3 pr-10 pl-10 mr-8 bg-black text-white rounded-full">프로젝트</button>
                    <button className="pt-3 pb-3 pr-10 pl-10 bg-black text-white rounded-full">게시글</button>
                </div>
                <div className="mt-10" onClick={()=>{setModal(prev => !prev)}}>닫기</div>
            </div>
        </div>
    )
}