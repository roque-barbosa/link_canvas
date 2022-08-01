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
                <div className='h-full flex-1 cursor-pointer dropdown dropdown-right'>
                <label tabIndex={0} className="cursor-pointer"> <DotsVerticalIcon/></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 -ml-2.5 sm:-inset-x-3.5">
                        <li><span className="flex h-5 justify-between">Apagar <XIcon className='h-4'/></span></li>
                    </ul>
                   
                </div>
           </div>
        </div>
    )
}