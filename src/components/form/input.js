import { forwardRef } from "react";

export const TextInput = forwardRef((props, ref) => {
    return (
        <div className="relative w-full mt-5">
            <input type="text" ref={ref} className="w-full rounded-sm"/>
            <label className="absolute -top-1.5 left-3 bg-white">{props.label}</label>
        </div>
    )
})

export const PasswordInput = forwardRef((props, ref) => {
    return (
        <div className="relative w-full mt-5">
            <input type="password" ref={ref} autoComplete="false" className="w-full border-black rounded-sm"/>
            <label className="absolute -top-1.5 left-3 bg-white">{props.label}</label>
        </div>
    )
})

export const SubmitButton = ({label}) => {
    return (<input className="w-full bg-black text-white p-4 mt-5" type="submit" value={label}/>)
}