import { NavbarRight } from "./NavbarRight"

export const Navbar: React.FC = () => {
    return (
        <div className="
            bg-[#97C8EB]
            h-14
            flex
            justify-end
        ">
            <div className="
                flex
                max-w-lg
                justify-end
                items-end
            ">
                <h1 className="
                    text-2xl
                    text-white
                ">
                    <NavbarRight/>
                </h1>
            </div>
        </div>
    )
} 