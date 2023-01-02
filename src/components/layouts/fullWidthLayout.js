
export const FullWidthLayout = ({title, children}) => {
    return (
        <div className="wrapper mb-20 mt-10">
            <h2 className=" text-xl font-semibold text-gray-800 mb-5 flex justify-between items-center ">
                <span className="max-w-[80%]">{title}</span>
                <span className="text-sm text-gray-500 whitespace-nowrap cursor-pointer">+ 더보기</span>
            </h2>
            <div className="relative">{children}</div>
        </div>
    )
}