import { LayoutPreviewCard } from "../Cards/LayoutPreviewCard"

export const ListLayouts: React.FC = () => {
    return (
        <div className="
                hidden sm:flex
                h-[90%] sm:h-[100%]
                max-h-[38rem] sm:max-h-[100%]
                flex-col
                bg-white
                w-full
                overflow-y-auto
                scrollbar-hide
                sm:rounded-lg
                border-1
                shadow-sm
                border-black
            ">
                <h1 className="
                    font-medium
                    text-xl
                    m-2
                    border-b-black
                    border-b-2
                    w-fit
                ">
                    Seus Layouts
                </h1>
                <div className=" flex w-full h-full p-2 flex-wrap gap-2 overflow-y-scroll scrollbar-hide">
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />
                    <LayoutPreviewCard id="1" title="Layout 1" />   
                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                    <LayoutPreviewCard id="1" title="Layout 1" /> 

                    <LayoutPreviewCard id="1" title="Layout 1" /> 
                </div>
            </div>
    )
}