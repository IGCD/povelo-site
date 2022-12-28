
export const FullWidthLayout = ({title, children}) => {
    return (
        <div className="wrapper mb-40">
            <h2 className=" text-2xl font-semibold text-gray-800 mb-5 flex justify-between items-center">{title} <span className="text-sm text-gray-500">+ 더보기</span></h2>
            <div className="relative">{children}</div>
        </div>
    )
}