import { Navbar } from "../Navbar/Navbar"
import { SideBar } from "../SideBar/SideBar"

interface IPageLayout {
    PageComponent: React.FC,
    pageTitle: string,
}

export const PageLayout: React.FC<IPageLayout> = ({PageComponent, pageTitle}) => {
    return (
        <div className="
            flex
            max-h-full
            min-w-full
            w-1/2
            bg-[#97C8EB]
            scrollbar-hide
        ">
            <SideBar/>
            <div className="flex flex-col w-full">
                {/* <Navbar/> */}
                {/* <div className="
                    flex
                    md:h-32 sm:h-20
                    sm:mb-10
                    mx-2
                    items-center
                    bg-[#97C8EB]
                    border-b-4
                    border-[#001011]
                ">
                    <h1 className="
                        p-4
                        ml-8
                        md:text-[3rem] text-[1.5rem]
                        font-semibold
                        text-[#001011]
                    ">{pageTitle}</h1>
                </div> */}
                <PageComponent/>
            </div>
        </div>
    )
}