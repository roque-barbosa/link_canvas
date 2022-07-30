import { useState } from "react";
import { INewCardLinkModal, NewCardLinkModal } from "./Modals/NewCardLinkModal";

interface ILayoutEditBarbutton {
    hoverTitle: string,
    Icon: any,
    ModalNewElement: React.FC<INewCardLinkModal>
}

export const LayoutEditBarbutton: React.FC<ILayoutEditBarbutton> = ({hoverTitle, Icon, ModalNewElement}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="tooltip " data-tip={`${hoverTitle}`}>
                <button className="p-1 hover:p-0.5" onClick={() => {
                    setShowModal(true)
                }}>
                    <Icon color='white' className="h-8" />
                </button>
            </div>
            {showModal && (
            <ModalNewElement closeFunction={setShowModal} title={`Criar ${hoverTitle}`}/>
            )}
        </>
    )
}