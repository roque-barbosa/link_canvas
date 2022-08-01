import { IAction } from "./LayoutReducer"

export interface IElement {
    id: string,
    type: string,
    title?: string,
    url?: string,
    bgColor?: string,
    textColor?: string,
    subTitle?: string,
    subTextColor?: string,
    size?: string,
    imgUri?:string,
}

interface IElementsState {
    elements: IElement[]
}

const initialState: IElementsState = {
    elements: [
        // {id: "1", type: "link", title: "First link", url: "www.google.com", bgColor: "#fff000", textColor: "#ffffff", size:"row"},
        // {id: "2", type: "link", title: "Second link", url: "www.google.com", bgColor: "#000000", textColor: "#ff0000", size:"row"}
    ]
  }



// Use the initialState as a default value
export default function elementsReducer(state = initialState, action:IAction) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case 'elements/addElement': {
        // We need to return a new state object
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          elements: [
            // with all of the old todos
            ...state.elements,
            // and the new todo object
            {
              // Use an auto-incrementing numeric ID for this example
              ...action.payload
            }
          ]
        }
      }
      case 'elements/removeElement': {
        const newElements = state.elements.filter((el:any) => {if (el.id != action.payload) return el})
        console.log(newElements)
        return {
            ...state,
            elements: [...newElements]  
        }
      }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }