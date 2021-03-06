import initialState from './initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
        authentication: true,
      }
    default:
      return state
  }
}

export default rootReducer