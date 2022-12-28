import { useCallback, useEffect, useRef, useState } from "react";
import { 
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosHeartEmpty
 } from "react-icons/io";
 import { 
    BsEye,
    BsEyeglasses,
    BsHeart
} from "react-icons/bs";
export const PostItem = ({data}) => {
    const tmpImageList = [
        "assets/images/tmp1.jpg",
        "assets/images/tmp2.jpg",
        "assets/images/tmp3.jpg",
        "assets/images/tmp4.jpg",
        "assets/images/tmp5.jpg",
        "assets/images/tmp6.jpg",
    ]
    const descriptionStyle = "text-sm text-gray-500";
    return (
        <div className=" mr-3 last:mr-0">
            <div className=" w-80 h-80">
                <img className="w-full h-full object-cover rounded-lg" src={tmpImageList[Number(data)]} alt="img"/>
            </div>
            <div className="mt-5 flex justify-between items-center pl-2 pr-2">
                <div className="flex items-center">
                    <img className="w-5 h-5 mr-2 rounded-full" src={tmpImageList[Number(data)]} alt="img"/>
                    <span className={`${descriptionStyle} hover:font-semibold hover:text-gray-600`}>Lorem Ipsum</span>
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
    const tmpList= [1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0];
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
            <div ref={(node) => {scrollRef.current = node}} className="w-full overflow-y-hidden scrollbar-hide">
                <div className="flex">{tmpList.map((data, index) => <PostItem key={index} data={data}/>)}</div>
            </div>
            {direction !== 2 ? <div className='absolute w-12 h-12 top-36 -right-6 bg-gray-100 border-gray-900 flex justify-center items-center rounded-full shadow-xl'><IoIosArrowForward/></div> : <></>}
        </>
    )
}