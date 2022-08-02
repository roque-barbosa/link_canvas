import { useState } from "react";
import {EyeIcon, EyeOffIcon} from '@heroicons/react/solid'

interface ILoginFormPassword {
    name: string,
    errors: any,
    register:any,
    placeholder: string,
}

export function LoginFormPassword({name, errors, register,placeholder, ...props}:ILoginFormPassword): JSX.Element {

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
            >Senha: </label>
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
