import { FormEmail } from "../Form/FormEmail"
import { useForm } from "react-hook-form";
import { FormPassword } from "../Form/FormPassword";
import { FormText } from "../Form/FormText";

export const SignUpForm: React.FC = () => {

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    return(
        <div className="
            flex
            flex-col
            w-4/6 sm:w-[60%]
            h-[45rem]
            bg-white
            rounded-2xl
            items-center
            justify-center
        ">
            
            <form className="
                flex
                flex-col
                w-4/6
                h-full
                gap-2
                py-4
            ">
                <img src="src/assets/Linkar.png" alt="" className="h-24 bg-blue-200 flex-[2]"/>
                <div className="flex flex-col flex-[4]">
                    <FormEmail name="email" label="Email:" placeholder="Seu Email" errors={errors} register={register}/>
                    <FormText name="name" label="Nome: " placeholder="Seu nome" errors={errors} register={register}/>
                    <FormPassword name="password" placeholder="********" errors={errors} register={register}/>
                    <FormPassword name="confirm)password" label="Confirm Password:" placeholder="********" errors={errors} register={register}/>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                    <button type="submit" className=" w-full bg-[#83adcc] h-10 rounded-xl font-semibold text-lg text-white  ">
                        Entrar
                    </button>
                    <span className="text-xs">Ja tem conta? Acesse <a className="text-blue-300 cursor-pointer">aqui</a></span>
                </div>
            </form>
        </div>
    )
}