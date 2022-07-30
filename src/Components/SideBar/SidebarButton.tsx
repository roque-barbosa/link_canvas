import useMedia from 'use-media'

interface ISidebarButton {
    Icon?: any,
    label: string
}

export const SidebarButton: React.FC<ISidebarButton> = ({Icon, label}) => {


    const isMobile = useMedia({maxWidth: 768})

    return(
        <div className="
            flex
            flex-col
            justify-center
            items-center
            gap-2
            cursor-pointer
            p-1
            hover:bg-gray-800
            py-2
            h-15
            tooltip
            tooltip-right
        "
        data-tip={label}>
            <Icon color='white' className='w-10 rounded-full p-1 sm:p-0'/>
            {/* {!isMobile && 
                <span className='
                text-white
                invisible sm:visible
            '>{label}</span>
            } */}
        </div>
    )
}