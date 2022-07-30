import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers/reducer'

let preloadedState
const persistedTodosString = localStorage.getItem('layout')

if (persistedTodosString) {
  preloadedState = {
    layout: JSON.parse(persistedTodosString)
  }
}

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState
  })

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch