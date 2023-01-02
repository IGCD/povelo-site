import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { 
    IoIosArrowBack,
    IoIosArrowForward,
 } from "react-icons/io";
 import { 
    BsEye,
    BsHeart
} from "react-icons/bs";
import Image from "components/lazy/image";
import { getRandomInt } from "utils/random";
import { getParametersForUnsplash } from "utils/unsplash";


export const PostItem = ({url}) => {

    const descriptionStyle = "text-sm text-gray-500";

    return (
        <div className=" mr-3 last:mr-0">
            <div className="w-80 max-md:w-full">
                <Image 
                    classStyle="w-full h-full object-cover rounded-lg" 
                    src={url + getParametersForUnsplash(640, 640, 50, "jpg")} 
                    lazySrc={url + getParametersForUnsplash(320, 320, 1, "jpg")} 
                />
            </div>
            <div className="mt-5 flex justify-between items-center pl-2 pr-2">
                <div className="flex items-center">
                    <Image 
                        classStyle={"w-5 h-5 mr-2 rounded-full"} 
                        src={url + getParametersForUnsplash(40, 40, 10, "jpeg")} 
                        lazySrc={url + getParametersForUnsplash(30, 30, 1, "jpg")}
                    />
                    <span className={`${descriptionStyle} hover:font-semibold hover:text-gray-600 whitespace-nowrap mr-10`}>Lorem Ipsum</span>
                </div>
                <ul className={`${descriptionStyle} flex space-x-2`}>
                    <li className="flex items-center"><BsEye className="mr-1"/>21.7K</li>
                    <li className="flex items-center"><BsHeart className="mr-1"/>137</li>
                </ul>
            </div>
        </div>
    )
}

export const PostList = () => {
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

    const [direction, setDirection] = useState(0);
    const scrollRef = useRef(null);
    
    const scrollHandler = useCallback(() => {
        if(scrollRef.current) {
            if(scrollRef.current.clientWidth + scrollRef.current.scrollLeft === scrollRef.current.scrollWidth) { 
                setDirection(prev => 2); 
            } 
            else if(scrollRef.current.scrollLeft === 0) {
                setDirection(prev => 0); 
            }
            else { 
                if(direction !== 1) setDirection(prev => 1); 
            }
        }
    }, [direction]);
    
    useEffect(()=>{
        if(scrollRef.current) {
            const refHandler = scrollRef.current;
            refHandler.addEventListener("scroll", scrollHandler);
        }
        else {
            return;
        }
        return () => { 
            if(scrollRef.current) {
                scrollRef.current.removeEventListener("scroll", scrollHandler);
            } 
            else {
                return;
            }
        }
    }, [scrollHandler])

    

    return (
        <>
            {direction !== 0 ? <div className='absolute w-12 h-12 top-36 -left-6 bg-gray-100 border-gray-900 flex justify-center items-center rounded-full shadow-xl'><IoIosArrowBack/></div> : <></>}
            <div ref={(node) => {scrollRef.current = node}} className="w-full overflow-y-hidden scrollbar-hide shadow-inner">
                <div className="flex relative">{tmpList.slice(0, 10).map((data, index) => <PostItem key={index} url={tmpImageList[data]}/>)}</div>
            </div>
            {direction !== 2 ? <div className='absolute w-12 h-12 top-36 -right-6 bg-gray-100 border-gray-900 flex justify-center items-center rounded-full shadow-xl'><IoIosArrowForward/></div> : <></>}
        </>
    )
}