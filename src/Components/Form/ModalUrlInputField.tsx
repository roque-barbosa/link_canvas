import {forwardRef} from 'react'

interface IModalUrlInputField {
    label: string,
    name: string,
    errors: any,
    register:any,
    placeholder: string,
}

export function ModalUrlInputField({name, errors, register, label, placeholder, ...props}:IModalUrlInputField): JSX.Element {
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
            >{label}</label>
            <div className='
                flex
                items-center
                justify-center
                border-gray-300
                border-solid
                border
                rounded
                text-gray-700
                bg-[#DDEDF8]
            '>
                <span className='
                    text-lg
                    font-semibold
                    outline-none
                    mx-2
                '>https://</span>
                <input className="
                    py-2
                    px-4
                    w-full
                    rounded
                    text-gray-700
                    "
                    placeholder={placeholder}
                    autoFocus
                    {...register(`${name}`, {
                        required: "Fill it"
                    })}
                />
                
            </div>
                {errors.teste && <div className="mb-3 text-normal text-red-500 ">{errors.teste.message as unknown as string}</div>}
            </div>
    )
}
