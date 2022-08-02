import {DotsVerticalIcon, XIcon} from '@heroicons/react/solid'
interface ILayoutPreviewCard {
    title: string,
    id: string
}


export const LayoutPreviewCard: React.FC<ILayoutPreviewCard> = ({title, id}) => {
    return (
        <div className="
            flex
            flex-col
            w-[12rem]
            h-[12rem]
            bg-red-300
            rounded-xl
            p-2
            justify-end
        ">
           <div className='flex h-6 w-full justify-between'>
            <h1 className="
                flex
                flex-[5]
            ">{title}</h1>
             <XIcon className='h-4'/>
           </div>
        </div>
    )
}