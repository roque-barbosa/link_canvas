import { NavbarButton } from "./NavbarButton"

export const NavbarRight: React.FC = () => {
    return (
        <div className="
            flex
            mx-2
            gap-2
            items-center
            justify-center
        ">
            <NavbarButton title="Home" handleFunc={()=>{}}/>
            <NavbarButton title="Something" handleFunc={()=>{}}/>
            <NavbarButton title="Sign Out" handleFunc={()=>{}}/>
        </div>
    )
}