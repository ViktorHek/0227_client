import initialState from './initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT_INDEX":
      debugger
      return {
        ...state,
        productList: action.payload
      }
    default:
      return state
  }
}

export default rootReducer