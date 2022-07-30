import { LinkCard } from "../Components/Cards/LinkCard";
import { PerfilCard } from "../Components/Cards/PerfilCard";
import { SectionCard } from "../Components/Cards/SectionCard";
import { SquareLinkCard } from "../Components/Cards/SquareLinkCard";
import { IElement } from "../store/Reducers/ElementsReducer";
import { XCircleIcon } from '@heroicons/react/solid'

export function renderElement(element: IElement) {
    if (element.type === 'link') {
        if (element.size === 'square' || element.size === 'smallSquare') {
            return (
                <div key={element.id}>
                    <div className="flex h-[100%] w-[100%] relative">
                        <button className="flex w-8 h-8 absolute top-0 right-2 p-1"><XCircleIcon color="white" className="rounded-full border-1 border-gray-300 bg-black" /></button>
                        <SquareLinkCard title={element.title!} url={element.url!} id={element.id} bgColor={element.bgColor} textColor={element.textColor}/>
                    </div>
                </div>
            )
        } else if (element.size === 'row' || element.size === 'bigRow') {
            return (
                <div key={element.id}>
                    <div className="flex h-[100%] w-[100%] relative">
                        <button className="flex w-8 h-8 absolute top-0 right-2 p-1"><XCircleIcon color="white" className="rounded-full border-1 border-gray-300 bg-black" /></button>
                        <LinkCard title={element.title!} url={element.url!} id={element.id} bgColor={element.bgColor} textColor={element.textColor}/>
                    </div>
                </div>
            )
        }

    }else if (element.type === 'section') {
        return (
            <div key={element.id} className="w-[100%]">
                <div className="flex h-[100%] w-[100%] relative">
                        <button className="flex w-8 h-8 absolute top-0 right-2 p-1"><XCircleIcon color="white" className="rounded-full border-1 border-gray-300 bg-black" /></button>
                        <SectionCard title={element.title || ""} id={element.id} bgColor={element.bgColor} textColor={element.textColor} subTitle={element.subTitle || ""} subTextColor={element.subTextColor || "#000000"}/>
                    </div>
            </div>
        )
    } else if (element.type === 'perfil') {
        console.log(element.title)
        return (
            <div key={element.id}>
                <div className="flex h-[100%] w-[100%] relative">
                        <button className="flex w-8 h-8 absolute top-0 right-2 p-1"><XCircleIcon color="white" className="rounded-full border-1 border-gray-300 bg-black" /></button>
                        <PerfilCard title={element.title || ""} id={element.id} bgColor={element.bgColor} textColor={element.textColor} imgUri={element.imgUri || null}/>
                    </div>
            </div>
        )
    }
}

export function renderElementView(element: IElement) {
    if (element.type === 'link') {
        if (element.size === 'square' || element.size === 'smallSquare') {
            return (
                <div key={element.id}>
                    <SquareLinkCard title={element.title!} url={element.url!} id={element.id} bgColor={element.bgColor} textColor={element.textColor}/>
                </div>
            )
        } else if (element.size === 'row' || element.size === 'bigRow') {
            return (
                <div key={element.id}>
                    <LinkCard title={element.title!} url={element.url!} id={element.id} bgColor={element.bgColor} textColor={element.textColor}/>
                </div>
            )
        }

    }else if (element.type === 'section') {
        return (
            <div key={element.id} className="w-[100%]">
                <SectionCard title={element.title || ""} id={element.id} bgColor={element.bgColor} textColor={element.textColor} subTitle={element.subTitle || ""} subTextColor={element.subTextColor || "#000000"}/>
            </div>
        )
    } else if (element.type === 'perfil') {
        console.log(element.title)
        return (
            <div key={element.id}>
                <PerfilCard title={element.title || ""} id={element.id} bgColor={element.bgColor} textColor={element.textColor} imgUri={element.imgUri || null}/>
            </div>
        )
    }
}