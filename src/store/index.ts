import { legacy_createStore as createStore, Action } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

const initialValue = { value: 0 }
function countReducer(state = initialValue, action: Action) {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1
    }
  }
  return state
}
export const store = configureStore({
  reducer: countReducer
})