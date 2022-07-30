import { LinkIcon,  PencilAltIcon, UserAddIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import { LayoutEditBarbutton } from './LayoutEditBarButton'
import { NewCardLinkModal } from './Modals/NewCardLinkModal';
import { NewPerfilCardModal } from './Modals/NewPerfilModal';
import { NewSectionCardModal } from './Modals/NewSectionCardModal';

export const LayoutEditBar: React.FC = () => {

    return (
        <div className="
            flex
            flex-row sm:flex-col
            w-4/6 sm:w-10
           bg-[#093A3E]
            h-10 sm:h-min
            max-h-[50%]
            absolute sm:sticky
            bottom-1 sm:top-2
            justify-center sm:justify-end
            rounded-3xl
        ">
            <LayoutEditBarbutton Icon={UserAddIcon} hoverTitle={"Novo perfil"} ModalNewElement={NewPerfilCardModal} />
            <LayoutEditBarbutton Icon={PencilAltIcon} hoverTitle={"Nova Section"} ModalNewElement={NewSectionCardModal} />
            <LayoutEditBarbutton Icon={LinkIcon} hoverTitle={"Novo Link"} ModalNewElement={NewCardLinkModal}/>
        </div>
    )
}