import { LoginForm } from "../Components/Login/LoginForm"

export const Login: React.FC = () => {
    return (
        <div className="
            flex
            max-h-full
            min-w-full
            w-1/2
            bg-[#97c8eb]
            scrollbar-hide
        ">
            <div className="
                flex
                flex-col
                flex-1
                min-h-screen
                bg-[#001011]
                justify-center
                items-center
            ">
                <LoginForm/>
            </div>
            <div className="
                hidden md:flex md:flex-[2.5]
            ">
                Image
            </div>
        </div>
    )
}