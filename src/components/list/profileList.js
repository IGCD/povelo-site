import Image from "components/lazy/image"
import { getParametersForUnsplash } from "utils/unsplash"

const ProfileItem = ({props}) => {
    return (
        <div className="relative mr-5 last:mr-0 w-96 h-96 max-md:h-[18rem] overflow-hidden rounded-lg bg-white shadow-xl border-gray-500 min-w-[200px]">
            <Image 
                classStyle={"w-full h-50"} 
                src={props.thumbnail + getParametersForUnsplash(480, 320, 50, "jpg")}
                lazySrc={props.thumbnail + getParametersForUnsplash(320, 320, 1, "jpg")}
            />
            <Image 
                classStyle={"absolute w-30 h-30 rounded-full left-1/2 -translate-x-1/2  -translate-y-1/2 border-2"}
                src={props.profileImage + getParametersForUnsplash(60, 60, 50, "jpg")}
                lazySrc={props.profileImage + getParametersForUnsplash(10, 10, 1, "jpg")}
            />
            <div className="relative pt-10 text-center">
                <h2 className="mt-4 font-semibold text-lg">{props.name}</h2>
                <div className="inline-block bg-gray-500 w-auto m-auto mt-3 p-2 pr-4 pl-4 text-white rounded-full">{props.branch}</div>
            </div>
        </div>
    )
}

export const ProfileList = () => {
    const tmpProfileImage = [
        "https://images.unsplash.com/photo-1664574654529-b60630f33fdb",
        "https://images.unsplash.com/photo-1672300746196-4da8f6631b9c",
        "https://images.unsplash.com/photo-1670272504528-790c24957dda",
        "https://images.unsplash.com/photo-1672301721320-7e26d86e3d1b",
        "https://images.unsplash.com/photo-1672169272063-52586a619bc6",
    ];
    const tmpProfiles = [
        {
            id : 100,
            name : "Lorem Ipsum",
            branch : "Front-end",
            profileImage : tmpProfileImage[0],
            thumbnail : tmpProfileImage[1],
        },
        {
            id : 200,
            name : "Lorem Ipsum",
            branch : "Software Engineer",
            profileImage : tmpProfileImage[2],
            thumbnail : tmpProfileImage[4],
        },
        {
            id : 300,
            name : "Lorem Ipsum",
            branch : "Back-end",
            profileImage : tmpProfileImage[1],
            thumbnail : tmpProfileImage[0],
        },
        {
            id : 400,
            name : "Lorem Ipsum",
            branch : "Project Manager",
            profileImage : tmpProfileImage[3],
            thumbnail : tmpProfileImage[2],
        },
    ]
    return (
        <div className="w-full flex overflow-x-scroll scrollbar-hide">
            {tmpProfiles.map(data => <ProfileItem key={data.id} props={data}/>)}
        </div>
    )
}