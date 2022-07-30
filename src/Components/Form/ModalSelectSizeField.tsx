import {forwardRef} from 'react'

interface IModalSelectSizeField {
    label: string,
    name: string,
    errors: any,
    register:any,
}

export function ModalSelectSizeField({name, errors, register, label, ...props}:IModalSelectSizeField): JSX.Element {
    return (
        <div className="
            flex
            justify-between

        ">
            <label className="
                text-gray-600
                text-lg
                font-semibold"
            >{label}</label>
            <select {...register(`${name}`, {required: "Fill it"})} className="
                flex
                border-stone-900
                bg-transparent
                cursor-pointer
                border
                justify-end
                items-center
                rounded-xl
                max-w-[8rem]
                flex-wrap
                break-words
            ">
                <option value="square">Quadrado</option>
                <option value="smallSquare">Quadrado pequeno</option>
                <option value="row">Linha</option>
                <option value="bigRow">Linha Grande</option>
            </select>
                {errors.teste && <div className="mb-3 text-normal text-red-500 ">{errors.teste.message as unknown as string}</div>}
            </div>
    )
}
