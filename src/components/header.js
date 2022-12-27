import projectInfo from "const/projectInfo";
import { Link } from "react-router-dom";
import { Navigation } from "./navigation";

export const Header = () => {
    
    return (
        <header className="flex justify-between items-center h-20 pr-20 pl-20 border border-b-gray-200">
            <h1 className="text-2xl text-gray-900 font-bold"><Link to="/">{projectInfo.projectName}</Link></h1>
            <Navigation/>
        </header>
    )
}