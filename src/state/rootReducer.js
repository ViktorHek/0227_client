import initialState from './initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "xyz":
      return {
        ...state,
        xyz: action.payload
      }
    default:
      return state
  }
}

export default rootReducer