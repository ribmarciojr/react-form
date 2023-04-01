import { INCREMENT_PROGRESS, DECREMENT_PROGRESS } from "./types"

export const progressReducer = (state, actions) => {
    switch (actions.type) {
      case INCREMENT_PROGRESS: {
        const incrementAmount = state.progress + 25
        return { ...state, progress: incrementAmount, ...actions.payload } 
      }
      
      case DECREMENT_PROGRESS: {
        const decrementAmount = state.progress - 25
        return { ...state, progress: decrementAmount, ...actions.payload } 
      }
  
      default: {
        return { ...state, ...actions.payload }
      }
    }
  }