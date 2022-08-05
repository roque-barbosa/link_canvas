import { Navbar } from "../Components/Navbar/Navbar"

import ReactGridLayout, {Responsive, WidthProvider} from 'react-grid-layout';
import { useEffect, useState } from "react";
import { DemoComponent } from "../Components/Cards/DemoComponent";
import { LinkCard } from "../Components/Cards/LinkCard";
import {store} from '../store/Store'
import { LayoutEditBar } from "../Components/Editor/LayoutEditBar";
import { IElement } from "../store/Reducers/ElementsReducer";
import { renderElement } from "../utils/EditorUtils";
import { useSelector } from 'react-redux'
import {ArrowNarrowRightIcon} from '@heroicons/react/solid'
import { ListLayouts } from "../Components/Editor/LsitLayouts";
const ResponsiveGridLayout = WidthProvider(Responsive);

export const Editor: React.FC = () => {

    const layoutState = useSelector((state:any) => state.layout.layout)
    const elementsState = useSelector((state:any) => state.elements.elements)


    function handleLayoutChange(layout: ReactGridLayout.Layout[]) {

        store.dispatch({
            type: 'layout/changeLayout',
            payload: layout
        })
        console.log(layoutState)
    }

    var layout: any = {lg: layoutState}

    return(
        <div className="
            flex
            flex-col sm:flex-row
            w-full
            h-screen sm:h-5/6
            justify-center
            items-center sm:items-start
            sm:my-6
            space-x-2
            md:h-[52rem]
            gap-4 sm:gap-0
            pl-2
            pr-2
            mt-1
            lg:p-10
        ">
            <div className="
                h-[90%] sm:h-[100%]
                max-h-[38rem] sm:max-h-[100%]
                flex-col
                bg-white
                w-full
                max-w-md
                justify-center
                relative
                overflow-y-auto
                scrollbar-hide
                rounded-[4rem] sm:rounded-[8rem]
                border-2 sm:border-4
                border-black
                border-separate border-spacing-11
                px-2
            ">
                <div className="flex h-16 bg-white sticky top-2"></div>
                <div className="relative">
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layout}
                    breakpoints={{lg: 800, sm: 500}}
                    cols={{lg: 4, sm: 4}}
                    rowHeight={70}
                    width={1200}
                    onLayoutChange={(e) => {
                        handleLayoutChange(e)
                    }}
                >
                    {elementsState.map((el: IElement) => renderElement(el))}
                    
                </ResponsiveGridLayout>
                </div>
            </div>
            <LayoutEditBar/>
            <ListLayouts/>
        </div>
    )
}