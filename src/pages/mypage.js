import { memo, useState } from "react"

const MyPage = () => {
    const [postView, setPostView] = useState(0);

    const wrapperStyle = "relative mb-10";
    const Title = ({title}) => <h2 className=" text-lg font-semibold mb-5">{title}</h2>;
    const Skill = ({text}) => <div className=" text-sm px-3 py-1 bg-gray-300 rounded-full">{text}</div>;
    const Project = ({data}) => <div></div>;
    return (
        <div className="container">
            <div className={wrapperStyle}>
                <Title title={"프로필"}/>
                <div className="absolute top-0 right-0 text-gray-500 text-sm cursor-pointer">수정하기</div>
                <div className="flex items-center">
                    <div className=" w-28 h-28 bg-slate-300 rounded-full">
                    </div>
                    <div className="flex flex-col gap-1 ml-5">
                        <h2 className="text-gray-900 font-semibold text-lg">홍길동 님의 프로필</h2>
                        <h3 className="text-gray-500">1997. 05. 29.</h3>
                        <h3 className="text-gray-500">Front-end Engineer</h3>
                    </div>
                </div>
            </div>
            <div className={wrapperStyle}>
                <Title title={"기술 스택"}/>
                <div className="absolute top-0 right-0 text-gray-500 text-sm cursor-pointer">수정하기</div>
                <div className="flex flex-row flex-wrap gap-2">
                    <Skill text={"React.js"}/>
                    <Skill text={"Tailwind"}/>
                    <Skill text={"SCSS"}/>
                    <Skill text={"Vue.js"}/>
                    <Skill text={"Python"}/>
                    <Skill text={"Tmp Skills"}/>
                </div>
            </div>
            <div className={wrapperStyle}>
                <Title title={"게시물"}/>
                <div className="absolute top-0 right-0 text-gray-500 text-sm cursor-pointer">수정하기</div>
                <div className="w-full">
                    <div className="flex">
                        <span className={`w-full text-sm text-center p-2 ${postView === 0 ? "bg-blue-300 text-white" : "text-gray-600"}`} onClick={()=>{setPostView(0)}}>PROJECTS</span>
                        <span className={`w-full text-sm text-center p-2 ${postView === 1 ? "bg-blue-300" : "text-gray-600"}`} onClick={()=>{setPostView(1)}}>POSTS</span>
                    </div>
                    <div className="grid grid-cols-3">
                        {
                            postView === 0 ?
                            <>
                                <div className="bg-gray-400 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">1</div>
                                <div className="bg-gray-300 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">2</div>
                                <div className="bg-gray-400 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">3</div>
                                <div className="bg-gray-300 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">4</div>
                                <div className="bg-gray-400 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">5</div>
                                <div className="bg-gray-300 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">6</div>
                                <div className="bg-gray-400 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">7</div>
                            </> :
                            <>
                                <div className="bg-gray-400 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">1</div>
                                <div className="bg-gray-300 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">2</div>
                                <div className="bg-gray-400 bg-opacity-30 border border-gray-400 border-opacity-30 aspect-square -mb-[1px] -ml-[1px]">3</div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(MyPage);