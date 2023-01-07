import { memo, useMemo } from "react";
import Image from "components/lazy/image";
import { 
    BsEye,
    BsHeart
} from "react-icons/bs";
import { getRandomInt } from "utils/random";
import { getParametersForUnsplash } from "utils/unsplash";

const tmpImage = "https://images.unsplash.com/photo-1547658719-da2b51169166";
const Card = ({src}) => {
    return (
        <div className="w-full h-[180px] flex bg-gray-100 bg-opacity-40">
            <div className="w-[300px] h-full">
                <Image src={src + getParametersForUnsplash(600, 320, 50, "jpg")} classStyle={"w-full h-full rounded-[10px] object-cover"}/>
            </div>
            <div className="w-full flex flex-col gap-5 ml-2">
                <div className="flex justify-between">
                <div className="text-blue-600 font-semibold">Front-end</div>
                <ul className="flex gap-3 text-gray-500">
                    <li className="flex items-center"><BsEye className="mr-1"/>21.7K</li>
                    <li className="flex items-center"><BsHeart className="mr-1"/>137</li>
                </ul>
                </div>
                <div className="w-full text-sm">
                겨울이 했던 덮어 봅니다. 하나에 그리고 않은 남은 내 봅니다. 위에 않은 밤이 아직 옥 잔디가 가난한 계절이 까닭입니다. 위에도 사랑과 다 봅니다. 당신은 까닭이요, 사랑과 하나에 부끄러운 계십니다.당신은 까닭이요, 사랑과 하나에 부끄러운 계십니다.
                </div>
                <div className="flex gap-3 flex-wrap">
                        <div className=" text-blue-500 underline">#React.js</div>
                        <div className=" text-blue-500 underline">#JavaScript</div>
                        <div className=" text-blue-500 underline">#Tailwind CSS</div>
                    </div>
            </div>
        </div>
    )
}
const Viewer = () => {

    const tmpImageList = useMemo(() => {
        return [
            "https://images.unsplash.com/photo-1664574654529-b60630f33fdb",
            "https://images.unsplash.com/photo-1672300746196-4da8f6631b9c",
            "https://images.unsplash.com/photo-1670272504528-790c24957dda",
            "https://images.unsplash.com/photo-1672301721320-7e26d86e3d1b",
            "https://images.unsplash.com/photo-1672169272063-52586a619bc6",
            "https://images.unsplash.com/photo-1670506686790-f817c6a327d6",
            "https://images.unsplash.com/photo-1670459647021-bbe98ba8dea0",
            "https://images.unsplash.com/photo-1657818114130-4de574478ea3",
            "https://images.unsplash.com/photo-1669407051686-6f326c6cb2ba",
            "https://images.unsplash.com/photo-1467810563316-b5476525c0f9",
            "https://images.unsplash.com/photo-1608875761345-cd40a7ea6034",
            "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad",
            "https://images.unsplash.com/photo-1593100126453-19b562a800c1",
            "https://images.unsplash.com/photo-1532619187608-e5375cab36aa",
            "https://images.unsplash.com/photo-1547658719-da2b51169166",
            "https://images.unsplash.com/photo-1526040652367-ac003a0475fe",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        ];
    }, [])

    const tmpList = useMemo(()=>Array.from({length : getRandomInt(30, 100)}, () => getRandomInt(0, tmpImageList.length-1)), [tmpImageList]);


    return (
        <div className="container flex">
            <div className="main w-full min-h-screen bg-gray-100 ">
                <div className="w-full h-96 rounded-[10px] overflow-hidden">
                    <Image src={tmpImage + getParametersForUnsplash(1600, 1080, 50, "jpg")} classStyle={"w-full h-full object-cover"}/>
                </div>
                <div className="p-5">

                    <div className=" text-blue-700 font-semibold my-3">Front-end</div>

                    <div className="w-full flex justify-between items-end">
                        <h2 className="text-2xl font-medium">{"Lorem Ipsum"}</h2>
                        <div className="text-md text-gray-500">2023.01.07</div>
                    </div>

                    <div className="w-full flex mt-3 justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Image src={"https://images.unsplash.com/photo-1544005313-94ddf0286df2" + getParametersForUnsplash(80, 80, 50, "jpg")} classStyle={"w-7 h-7 object-cover object-top rounded-full"}/>
                            <span className=" text-gray-700 text-lg">Lorem Ipum</span>
                        </div>
                        <ul className="flex gap-3 text-gray-500">
                            <li className="flex items-center"><BsEye className="mr-1"/>21.7K</li>
                            <li className="flex items-center"><BsHeart className="mr-1"/>137</li>
                        </ul>
                    </div>

                    <div className="flex gap-3 my-4 flex-wrap">
                        <div className=" text-blue-500 underline">#React.js</div>
                        <div className=" text-blue-500 underline">#JavaScript</div>
                        <div className=" text-blue-500 underline">#Tailwind CSS</div>
                        <div className=" text-blue-500 underline">#Github</div>
                    </div>

                    {/* 여기서부터 게시글 본문 */}
                    <div className="text-gray-500 text-base">
                        겨울이 했던 덮어 봅니다. 하나에 그리고 않은 남은 내 봅니다. 위에 않은 밤이 아직 옥 잔디가 가난한 계절이 까닭입니다. 위에도 사랑과 다 봅니다. 겨울이 잔디가 이름자를 까닭입니다. 별에도 내 그러나 언덕 아스라히 있습니다. 별이 하늘에는 그리워 이름과, 무성할 헤는 무엇인지 버리었습니다. 책상을 강아지, 슬퍼하는 내 있습니다. 가득 아스라히 딴은 까닭입니다. 별 너무나 별을 아직 사람들의 마리아 봅니다. 당신은 까닭이요, 사랑과 하나에 부끄러운 계십니다. 
                    </div>
                </div>
            </div>
            <div className="list flex flex-col gap-8 w-[50rem] min-h-screen ml-14 max-lg:hidden">
                {tmpList.slice(0, 8).map((data, index) => <Card key={index} src={tmpImageList[data]}/>)}
            </div>
        </div>
    )
}

export default memo(Viewer);