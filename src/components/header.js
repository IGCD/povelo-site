import projectInfo from "const/projectInfo";
import { Link } from "react-router-dom";
import { Navigation } from "./navigation";

export const Header = () => {
    
    return (
        <header className="w-full h-20 border border-x-0 bg-white z-20 border-b-gray-200 min-w-[600px] pr-20 pl-20 max-md:min-w-[100%] max-md:text-sm max-md:pr-10 max-md:pl-10">
            <div className=" flex justify-between items-center h-full max-w-[1360px] m-auto">
                <h1 className="text-2xl text-gray-900 font-bold"><Link to="/">{projectInfo.projectName}</Link></h1>
                <Navigation/>
            </div>
        </header>
    )
}