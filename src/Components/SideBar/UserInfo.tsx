import {UserIcon} from '@heroicons/react/solid'
import { useState } from 'react'
import useMedia from 'use-media'

interface IUserInfo {
    profilePicUri?: string,
    userName: string
}

export const UserInfo: React.FC<IUserInfo> = ({profilePicUri, userName}) => {


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
            h-15 sm:h-32
            mb-10
            tooltip
            tooltip-right
        "
        data-tip={userName}>
            {profilePicUri
                ? <div className='flex rounded-full sm:w-24 sm:h-24 w-10 h-10 bg-red-300'><img src={profilePicUri} alt="Foto de perfil" className='object-cover rounded-full'/> </div>
                : <UserIcon color='black' className='w-10 sm:w-20 rounded-full bg-white'/>
            }
            {/* {!isMobile && 
                <span className='
                text-white
                invisible sm:visible
            '>{userName}</span>
            } */}
        </div>
    )
}

{/* <img src={profilePicUri} alt="Foto de perfil" className=''/> */}