import {XIcon} from '@heroicons/react/solid'
import { useForm } from "react-hook-form";
import { store } from '../../../store/Store';
import { ModalColorPickerField } from '../../Form/ModalColorPickerField';
import { ModalTextInputField } from '../../Form/ModalTextInputField';
import { ModalUrlInputField } from '../../Form/ModalUrlInputField';

export interface INewSectionCardModal {
    closeFunction: React.Dispatch<any>,
    title: string,
}

export const NewSectionCardModal: React.FC<INewSectionCardModal> = ({closeFunction, title}) => {

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    function onSubmit(data:any) {

        const newId = Date.now().toString()

        

        const newElementLayout = {
          h: 2,
          i: newId,
          isBounded: undefined,
          isDraggable: undefined,
          isResizable: undefined,
          maxH: undefined,
          maxW: undefined,
          minH: undefined,
          minW: undefined,
          moved: false,
          resizeHandles: undefined,
          static: false,
          w: 4,
          x: 0,
          y: 0
      }


        store.dispatch({
          type: 'layout/addElement',
          payload: newElementLayout
      })

        store.dispatch({
          type: 'elements/addElement',
          payload: {...data, id: newId, type: "section"}
        })

        // console.log(store.getState().layout.layout)
        closeFunction(false)

        
    }
    const onErrors = (errors:any) => console.error(errors);

    

    return(
        <>
          <div className="
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0 z-50
            outline-none
            focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-[#001011]">
                  <h3 className="text-3xl font-semibold text-white">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none h-10 w-10 hover:p-0.5"
                    onClick={() => closeFunction(false)}
                  >
                    <XIcon color='white'></XIcon>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">

                  <form
                    className=" flex flex-col w-full gap-4"
                    onSubmit={handleSubmit(onSubmit, onErrors)}
                    
                  >
                    <ModalTextInputField name='title' label="Titulo" placeholder="Titulo" errors={errors} register={register}/>
                    <ModalColorPickerField name='textColor' label="Cor do titulo" errors={errors} register={register}/>
                    <hr />
                    <ModalTextInputField name='subTitle' label="Legenda" placeholder="Legenda... ?" errors={errors} register={register}/>
                    <ModalColorPickerField name='subTextColor' label="Cor da legenda" errors={errors} register={register}/>
                    <hr />
                    <ModalColorPickerField name='bgColor' label="Cor do fundo" errors={errors} register={register}/>
                    
                    {/* <ModalUrlInputField name='url' label="Link URL" placeholder="www.suaurl.com" errors={errors} register={register}/>
                    <ModalColorPickerField name='bgColor' label="Cor do lInk" errors={errors} register={register}/> */}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button className="
                    bg-[#56A6DC]
                    text-white
                    active:bg-[#56A6DC]
                    font-bold
                    uppercase
                    text-sm
                    px-6
                    py-3
                    rounded
                    shadow
                    hover:shadow-lg
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-linear
                    transition-all
                    duration-150"
                    type="submit"
                  >
                    Salvar Elemento
                  </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        

    )
}