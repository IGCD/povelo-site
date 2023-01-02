import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
export const TopBanner = () => {
    const [show, setShow] = useState(true);
    return (
        <div 
            className="absolute whitespace-nowrap flex top-3 left-2/4 h-14 pr-10 pl-10 bg-gray-700 rounded-full z-10 shadow-lg max-md:hidden" 
            style={show ? {transition : "1s", transform : "translateY(0%) translateX(-50%)"} : {transition : "1s", transform : "translateY(-5rem)  translateX(-50%)"}}>

            <div className=' relative w-full h-full flex justify-between items-center text-white m-auto'>
                <h3  className=' text-base font-bold'>2023 최신 개발 트랜드를 확인해보세요 !</h3>
                <span className=' text-xs  font-bold cursor-pointer ml-20' onClick={()=>{setShow(prev => !prev)}}><BsXLg/></span>
            </div>
        </div>
    )
}