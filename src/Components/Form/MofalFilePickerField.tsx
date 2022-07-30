import {forwardRef} from 'react'

interface IModalFilePickerField {
    label: string,
    name: string,
    errors: any,
    register:any,
}

export function ModalFilePickerField({name, errors, register, label, ...props}:IModalFilePickerField): JSX.Element {
    return (
        <div className="
            flex
            gap-2
            justify-between
            
        ">
            <label className="
                text-gray-600
                text-lg
                font-semibold"
            >{label}</label>
            <input className="
                flex
                rounded-full
                w-3/5
                "
                type="file"
                autoFocus
                {...register(`${name}`, {
                    required: "Fill it"
                })}
            />
                {errors.teste && <div className="mb-3 text-normal text-red-500 ">{errors.teste.message as unknown as string}</div>}
            </div>
    )
}
