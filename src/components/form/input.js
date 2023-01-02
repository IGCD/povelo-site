import { forwardRef } from "react";

export const TextInput = forwardRef((props, ref) => {
    return (
        <div className="relative w-full mt-5">
            <input id={props.id} type="text" ref={ref} className="w-full border-gray-300 rounded-sm" onChange={"checkFunc" in props ? ()=>{props.checkFunc()} : ()=>{}}/>
            <label htmlFor={props.id} className="absolute -top-1.5 left-3 bg-white text-gray-500">{props.label}</label>
        </div>
    )
})

export const PasswordInput = forwardRef((props, ref) => {
    return (
        <div className="relative w-full mt-5">
            <input id={props.id} type="password" ref={ref} autoComplete="false" className="w-full border-gray-300 rounded-sm" onChange={"checkFunc" in props ? ()=>{props.checkFunc()} : ()=>{}}/>
            <label htmlFor={props.id} className="absolute -top-1.5 left-3 bg-white text-gray-500">{props.label}</label>
        </div>
    )
})

export const SubmitButton = ({label}) => {
    return (<input className="w-full bg-gray-800 text-white p-4 mt-5 rounded-sm cursor-pointer" type="submit" value={label}/>)
}