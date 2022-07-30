interface ISectionCard {
    id: string,
    bgColor?: string,
    textColor?: string,
    title: string,
    subTitle: string,
    subTextColor: string,
}

export const SectionCard: React.FC<ISectionCard> = ({id, title, bgColor, textColor, subTextColor, subTitle}) => {

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
                <h1 style={{color: textColor}} className="
                    font-semibold
                    text-3xl
                ">{title}</h1>
                <span style={{color: subTextColor}} className="
                    text-xl
                    italic
                ">{subTitle}</span>
            </div>
        </div>
    )
}