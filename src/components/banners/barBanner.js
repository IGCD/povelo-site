export const BarBanner = ({text}) => {
    return (
        <div className="w-full bg-red-500 mb-10 p-5 pl-10 pr-10 max-md:hidden">
            <h2 className="text-gray-100 text-3xl font-semibold">{text}</h2>
        </div>
    )
}