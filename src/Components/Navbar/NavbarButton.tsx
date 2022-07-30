interface INavbarButton {
    title: string,
    handleFunc: Function
}

export const NavbarButton: React.FC<INavbarButton> = ({title, handleFunc}) => {
    return (
        <div className="
            h-5/6
            items-center
            justify-center
        ">
            <button className="
                text-base
                text-center
                border-b-4
                border-white
                hover:border-[#001011]
            ">{title}</button>
        </div>
    )
}