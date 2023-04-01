import TypeAction from './globalTypeAction'

const initialState = {
    orderTotal: 0
  }
  
  // Reducer
const rootReducer = (state = initialState, action) =>{
  
    if(action.type === TypeAction.PLUS_ORDER){
      return{
        ...state,
        orderTotal:  state.orderTotal + 1
      }
    }
  
    if(action.type === TypeAction.MINUS_ORDER){
      if(state.orderTotal > 0){
        return{
          ...state,
          orderTotal: state.orderTotal - 1
        } 
      }
    }
  
    return state
  }

export default rootReducer