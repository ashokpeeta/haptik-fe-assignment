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
    case Actions.ADD_USER: {
      const users = [ ...state.users ]
      users.push(action.payload)
      return {
        ...state,
        loading: false,
        users
      }
    }
    case Actions.DELETE_USER: {
      const users = [ ...state.users ]
      users.splice(action.payload, 1)
      return {
        ...state,
        loading: false,
        users
      }
    }
    case Actions.TOGGLE_FAVORITE_USER: {
      const { userIndex, actionIndex } = action.payload
      const users = [ ...state.users ]
      const toggledUser = users.splice(userIndex, 1)[0]
      const favoriteUsers = users.filter((user) => {
        return user.actions.filter((action) => {
          return action.type === 'favorite'
        }).length > 0
      })
      const nonFavoriteUsers = users.filter((user) => {
        return user.actions.filter((action) => {
          return action.type === 'non-favorite'
        }).length > 0
      })
      if (toggledUser.actions[actionIndex].type === 'favorite') {
        toggledUser.actions[actionIndex].type = 'non-favorite'
        nonFavoriteUsers.push(toggledUser)
      } else {
        toggledUser.actions[actionIndex].type = 'favorite'
        favoriteUsers.push(toggledUser)
      }
      return {
        ...state,
        loading: false,
        users: favoriteUsers.concat(nonFavoriteUsers)
      }
    }
    default: {
      return state
    }
  }
}
export default usersReducer
