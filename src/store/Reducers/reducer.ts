// import * as actionTypes from "./actionTypes"
import { combineReducers } from 'redux'
import elementsReducer from './ElementsReducer'
import layoutReducer, { IAction } from "./LayoutReducer"

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  layout: layoutReducer,
  elements: elementsReducer
})

export default rootReducer