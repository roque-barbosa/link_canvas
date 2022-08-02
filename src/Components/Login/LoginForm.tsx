import { LoginFormEmail } from "../Form/LoginFormEmail"
import { useForm } from "react-hook-form";
import { LoginFormPassword } from "../Form/LoginFormPassword";

export const LoginForm: React.FC = () => {

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
            h-[30rem]
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
                    <LoginFormEmail name="email" label="Email:" placeholder="Seu Email" errors={errors} register={register}/>
                    <LoginFormPassword name="password" placeholder="********" errors={errors} register={register}/>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                    <button type="submit" className=" w-full bg-[#83adcc] h-10 rounded-xl font-semibold text-lg text-white  ">
                        Entrar
                    </button>
                    <span className="text-xs">Nao tem conta? Crie uma <a className="text-blue-300 cursor-pointer">aqui</a></span>
                </div>
            </form>
        </div>
    )
}