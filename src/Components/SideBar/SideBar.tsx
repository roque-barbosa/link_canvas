import { useEffect, useState } from "react"
import { UserInfo} from "./UserInfo"
import {useMedia} from 'use-media'
import {
    FolderOpenIcon,
    PlusCircleIcon,
    DotsCircleHorizontalIcon,
    CreditCardIcon,
    ArrowLeftIcon,
    PhoneIcon
} from '@heroicons/react/solid'
import { SidebarButton } from "./SidebarButton"



export const SideBar: React.FC = () => {

    const isMobile = useMedia({maxWidth: 768})

    const [sideBarSize, setSideBarSize] = useState<string>("w-14")

    useEffect(() => {
        if (isMobile) {
            setSideBarSize("w-14")
        } else {
            setSideBarSize("w-32")
        }
    }, [isMobile])

    return(
        <div className={`
        ${sideBarSize}
        flex
        flex-col
        
        bg-[#001011]
        `}>
            <UserInfo userName="Roque Barbosa" profilePicUri="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col">
                    <SidebarButton Icon={PlusCircleIcon} label="Novo Layout"/>
                    <SidebarButton Icon={FolderOpenIcon} label="Meus Layouts"/>
                    <SidebarButton Icon={CreditCardIcon} label="Planos"/>
                </div>

                <div className="flex flex-col justify-center items-center hover:bg-gray-800">
                    <div className="dropdown dropdown-top dropdown-right w-1/2">
                        <label tabIndex={0}><SidebarButton Icon={DotsCircleHorizontalIcon} label="Opcoes"/></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 -ml-2.5 sm:-inset-x-3.5">
                            <li><div className="flex h-10 justify-between">Sair <ArrowLeftIcon color="black" className="w-5"/></div></li>
                            <li><div className="flex h-10 justify-between">Fale Conosco <PhoneIcon color="black" className="w-5"/></div></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}