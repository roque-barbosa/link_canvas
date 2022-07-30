// export const ADD_ELEMENT = "ADD_ELEMENT"
// export const REMOVE_ELEMENT = "REMOVE_ELEMENT"

// interface IElementLayoutPosition {
//     i: string,
//     h: number,
//     w: number,
//     x: number,
//     y: number,
//     maxH: number | undefined,
//     maxW: number | undefined,
//     minH: number | undefined,
//     minW: number | undefined,
//     static: boolean,
//     resizeHandles: undefined,
//     moved: boolean,
//     isResizable: undefined,
//     isDraggable: undefined,
//     isBounded: undefined
// }

// interface ILayoutState {
//     layout: IElementLayoutPosition[]
// }

export const ADD_ELEMENT = {
    type: 'layout/addElement'
}
export const REMOVE_ELEMENT = {type: 'layout/removeElement'}