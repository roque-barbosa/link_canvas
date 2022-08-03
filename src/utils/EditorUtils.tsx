import { LinkCard } from "../Components/Cards/LinkCard";
import { PerfilCard } from "../Components/Cards/PerfilCard";
import { SectionCard } from "../Components/Cards/SectionCard";
import { SquareLinkCard } from "../Components/Cards/SquareLinkCard";
import { IElement } from "../store/Reducers/ElementsReducer";
import { XIcon } from '@heroicons/react/solid'
import { store } from '../store/Store';

export function renderElement(element: IElement) {
    if (element.type === 'link') {
        if (element.size === 'square' || element.size === 'smallSquare') {
            return (
                <div key={element.id} >
                    <div className="flex h-[100%] w-[100%] relative">
                        <button 
                            className="flex w-6 h-6 absolute top-[10%] right-[10%]"
                            onClick={() => {handleExcludeClick(element.id)}}
                        >
                            <XIcon color={element.textColor} className="rounded-full border-1 border-white" />
                        </button>
                        <SquareLinkCard title={element.title!} url={element.url!} id={element.id} bgColor={element.bgColor} textColor={element.textColor}/>
                    </div>
                </div>
            )
        } else if (element.size === 'row' || element.size === 'bigRow') {
            return (
                <div key={element.id}>
                    <div className="flex h-[100%] w-[100%] relative">
                        <button 
                            className="flex w-6 h-6 absolute top-1 left-2"
                            onClick={() => {handleExcludeClick(element.id)}}
                        >
                            <XIcon color={element.textColor} className="rounded-full border-1 border-white" />
                        </button>
                        <LinkCard title={element.title!} url={element.url!} id={element.id} bgColor={element.bgColor} textColor={element.textColor}/>
                    </div>
                </div>
            )
        }

    }else if (element.type === 'section') {
        return (
            <div key={element.id} className="w-[100%]">
                <div className="flex h-[100%] w-[100%] relative">
                        <button 
                            className="flex w-6 h-6 absolute top-[10%] right-[10%]"
                            onClick={() => {handleExcludeClick(element.id)}}
                        >
                            <XIcon color={element.textColor} className="rounded-full border-1 border-white" />
                        </button>
                        <SectionCard title={element.title || ""} id={element.id} bgColor={element.bgColor} textColor={element.textColor} subTitle={element.subTitle || ""} subTextColor={element.subTextColor || "#000000"}/>
                    </div>
            </div>
        )
    } else if (element.type === 'perfil') {
        console.log(element.title)
        return (
            <div key={element.id}>
                <div className="flex h-[100%] w-[100%] relative">
                        <button
                            className="flex w-6 h-6 absolute top-[10%] right-[10%]"
                            onClick={() => {handleExcludeClick(element.id)}}
                        >
                            <XIcon color={element.textColor} className="rounded-full border-1 border-white" />
                        </button>
                        <PerfilCard title={element.title || ""} id={element.id} bgColor={element.bgColor} textColor={element.textColor} imgUri={element.imgUri || null}/>
                    </div>
            </div>
        )
    }
}

function handleExcludeClick(elementId: string){
    console.log("handleClick: ", elementId)
    store.dispatch({
        type: 'elements/removeElement',
        payload: elementId
    })
    // store.dispatch({
    //     type: 'layout/removeElement',
    //     payload: elementId
    // })
    
}