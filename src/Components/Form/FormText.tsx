
interface IFormText {
    label: string,
    name: string,
    errors: any,
    register:any,
    placeholder: string,
}

export function FormText({name, errors, register, label, placeholder, ...props}:IFormText): JSX.Element {
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
            <input className="
                border-solid 
                border-gray-300
                border
                py-2
                px-4
                w-full
                rounded
                text-gray-900
                bg-[#DDEDF8]
                "
                placeholder={placeholder}
                autoFocus
                type="text"
                {...register(`${name}`, 
                // {
                //     required: "Fill it"
                // }
                )}
            />
                {errors.teste && <div className="mb-3 text-normal text-red-500 ">{errors.teste.message as unknown as string}</div>}
            </div>
    )
}
