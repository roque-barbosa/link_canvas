import { SocialIcon } from 'react-social-icons';

interface ILinkCard {
    id: string,
    bgColor?: string,
    textColor?: string,
    url: string,
    title: string
}

export const LinkCard: React.FC<ILinkCard> = ({id, title, url, bgColor, textColor}) => {

    return(
        <div className={`
            flex
            rounded-md
            h-full
            w-full
            justify-center
            items-center
        `}
        >
            <button style={{backgroundColor: bgColor}} className="
                    flex
                    w-full
                    m-4
                    h-3/5 sm:h-3/5
                    items-center
                    rounded-3xl sm:rounded-full
                    px-2
                ">
                    <a href={`https://${url}`} target="_blank" 
                        style={{color: textColor}}
                        className="sm:text-xl font-semibold text-ellipsis flex-[5]"
                    >{title}</a>

                    <div className='flex flex-1 rounded-full bg-white'><SocialIcon bgColor={bgColor} url={`https://${url}`} /></div>
                </button>
        </div>
    )
}