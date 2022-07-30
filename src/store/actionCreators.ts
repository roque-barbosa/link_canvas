import * as actionTypes from "./actionTypes"

export function addElementToLayout(element: IElementLayoutPosition) {
  const action: ElementLayoutPositionAction = {
    type: actionTypes.ADD_ELEMENT,
    element,
  }
  return (dispatch: DispatchType) => {
    dispatch(action)
    }
}

export function removeElementFromLayout(element: IElementLayoutPosition) {
  const action: ElementLayoutPositionAction = {
    type: actionTypes.REMOVE_ELEMENT,
    element,
  }
  return (dispatch: DispatchType) => {
    dispatch(action)
    }
}

// export function simulateHttpRequest(action: ArticleAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }
