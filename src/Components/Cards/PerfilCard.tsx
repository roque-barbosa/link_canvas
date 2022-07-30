import {UserCircleIcon} from '@heroicons/react/solid'

interface IPerfilCard {
    id: string,
    bgColor?: string,
    textColor?: string,
    title: string,
    imgUri: string | null,
}

export const PerfilCard: React.FC<IPerfilCard> = ({id, title, bgColor, textColor, imgUri}) => {

    console.log("textColor :", textColor)

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
            <div style={{backgroundColor: bgColor}} className="
                flex
                flex-col
                h-full
                w-full
                rounded-t-3xl
                justify-center
                items-center
            ">
                {imgUri
                    ? <img src={imgUri || undefined} alt="" className="
                        bg-red-300
                        object-cover
                        h-40
                        w-40
                        rounded-full
                        mb-8
                    "/>
                    : <UserCircleIcon color='white' className='h-40 w-40 '/>}
                <h1 style={{color: textColor}} className="
                    font-semibold
                    text-3xl
                ">{title}</h1>
            </div>
        </div>
    )
}