import { PostItem } from "components/list/postList";
import { memo, useMemo } from "react"
import { getRandomInt } from "utils/random";

const Board = () => {
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
    const postList = tmpList.map((data, index) => <PostItem key={index} url={tmpImageList[data]}/>);

    return (
        <div className="container">
            <h2 className="relaitve mb-5 text-xl font-semibold">카테고리</h2>
            <div className="filter flex">
            </div>
            <div className="w-full flex flex-wrap justify-start gap-10">
                {postList}
            </div>
        </div>
    )
}

export default memo(Board);