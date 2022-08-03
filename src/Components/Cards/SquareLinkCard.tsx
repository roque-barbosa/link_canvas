import { SocialIcon } from "react-social-icons"

interface ISquareLinkCard {
    id: string,
    bgColor?: string,
    textColor?: string,
    url: string,
    title: string
}

export const SquareLinkCard: React.FC<ISquareLinkCard> = ({id, title, url, bgColor, textColor}) => {

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
                w-full
                h-full
                justify-end
                items-end
                flex
                rounded-2xl
                px-2
                my-2
                mx-1
            ">
                <a href={`https://${url}`} target="_blank" style={{color: textColor}} className="
                    flex
                    h-[100%]
                    items-end
                    text-ellipsis overflow-hidden
                ">
                    <div className="flex text-ellipsis overflow-hidden">
                        <p className="
                        sm:text-xl font-semibold
                        text-ellipsis overflow-hidden
                    ">{title}</p>
                    </div>
                    <div className='flex flex-1 rounded-full bg-white'><SocialIcon bgColor={bgColor} url={`https://${url}`} /></div>
                </a>
            </button>
        </div>
    )
}