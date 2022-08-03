import { useState } from "react";
import {EyeIcon, EyeOffIcon} from '@heroicons/react/solid'

interface IFormPassword {
    name: string,
    errors: any,
    register:any,
    placeholder: string,
    label?: string
}

export function FormPassword({name, errors, register,placeholder,label, ...props}:IFormPassword): JSX.Element {

    const [showPass, setShowPass] = useState<boolean>(false);

    return (
        <div className="
            flex
            flex-col
            gap-2
        ">
            <label className="
                text-gray-600
                text-lg
                font-semibold"
            >{label ||  "Senha:"} </label>
            <div className="flex h-10 bg-[#DDEDF8] gap-2">
            <input className="
                border-solid 
                py-2
                px-4
                w-full
                rounded
                text-gray-900
                bg-[#DDEDF8]
                "
                placeholder={placeholder}
                autoFocus
                type={showPass ? "password" : "text"}
                {...register(`${name}`)}
            />
            <div className="flex h-10 w-8 mr-1">{showPass? <EyeIcon onClick={() => {setShowPass(!showPass)}}/> : <EyeOffIcon onClick={() => {setShowPass(!showPass)}}/>}</div>
            </div>
                {errors.teste && <div className="mb-3 text-normal text-red-500 ">{errors.teste.message as unknown as string}</div>}
            </div>
    )
}
