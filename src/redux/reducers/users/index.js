import * as Actions from '../../actions/users/constants'

const initialState = {
  loading: false,
  users: []
}

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_USERS_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case Actions.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    }
    case Actions.GET_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        users: []
      }
    }
    default: {
      return state
    }
  }
}
export default usersReducer
