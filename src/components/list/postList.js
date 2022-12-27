import { useCallback, useEffect, useRef, useState } from "react";
import { 
    IoIosArrowBack,
    IoIosArrowForward
 } from "react-icons/io";
export const PostItem = ({data}) => {
    return (
        <div>
            <div className=" w-60 h-40 mr-2 border bg-gray-200">{data}</div>
            <h4 className="mt-5">Title</h4>
        </div>
    )
}

export const PostList = () => {
    const tmpList= ["1", "2", "3","1", "2", "3","1", "2", "3"];
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
            {direction !== 0 ? <div className='absolute w-8 h-8 top-16 -left-4 bg-gray-100 flex justify-center items-center rounded-full shadow-xl'><IoIosArrowBack/></div> : <></>}
            <div ref={(node) => {scrollRef.current = node}} className="w-full overflow-y-hidden scrollbar-hide">
                <div className="flex">{tmpList.map((data, index) => <PostItem key={index} data={data}/>)}</div>
            </div>
            {direction !== 2 ? <div className='absolute w-8 h-8 top-16 -right-4 bg-gray-100 flex justify-center items-center rounded-full shadow-xl'><IoIosArrowForward/></div> : <></>}
        </>
    )
}