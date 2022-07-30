export interface IAction {
    type: string,
    payload?: any
}

interface IElementLayoutPosition {
  i: string,
  h: number,
  w: number,
  x: number,
  y: number,
  maxH: number | undefined,
  maxW: number | undefined,
  minH: number | undefined,
  minW: number | undefined,
  static: boolean,
  resizeHandles: undefined,
  moved: boolean,
  isResizable: undefined,
  isDraggable: undefined,
  isBounded: undefined
}

type LayoutState = {
  layout: IElementLayoutPosition[]
}

const initialState: LayoutState = {
    layout: [
    //   {
    //       h: 1,
    //       i: "1",
    //       isBounded: undefined,
    //       isDraggable: undefined,
    //       isResizable: undefined,
    //       maxH: undefined,
    //       maxW: undefined,
    //       minH: undefined,
    //       minW: undefined,
    //       moved: false,
    //       resizeHandles: undefined,
    //       static: false,
    //       w: 2,
    //       x: 0,
    //       y: 0
    //   },
    //   {
    //     h: 1,
    //     i: "2",
    //     isBounded: undefined,
    //     isDraggable: undefined,
    //     isResizable: undefined,
    //     maxH: undefined,
    //     maxW: undefined,
    //     minH: undefined,
    //     minW: undefined,
    //     moved: false,
    //     resizeHandles: undefined,
    //     static: false,
    //     w: 2,
    //     x: 0,
    //     y: 0
    // },
    ]
  }



// Use the initialState as a default value
export default function layoutReducer(state = initialState, action:IAction) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      case 'layout/addElement': {
        console.log("payload: ", action.payload)
        return {
          ...state,
          layout: [...state.layout, action.payload],
        }
      }
      case 'layout/changeLayout': {
        return {
            ...state,
            layout: [...action.payload]  
        }
      }
      default:
        return state
    }
  }