import projectInfo from "const/projectInfo";
import { Link } from "react-router-dom";
import { Navigation } from "./navigation";

export const Header = () => {
    
    return (
        <header className="h-20 pr-20 pl-20 border border-b-gray-200">
            <div className=" flex justify-between items-center h-full">
                <h1 className="text-2xl text-gray-900 font-bold"><Link to="/">{projectInfo.projectName}</Link></h1>
                <Navigation/>
            </div>
        </header>
    )
}