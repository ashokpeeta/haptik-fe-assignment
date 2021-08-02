import * as Actions from '../../actions/users/constants'

const initialState = {
  loading: false,
  isSearching: false,
  users: [],
  searchedUsers: []
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
        isSearching: false,
        searchedUsers: [],
        users
      }
    }
    case Actions.DELETE_USER: {
      const users = [ ...state.users ]
      const index = users.findIndex((user) => user.id === action.payload)
      users.splice(index, 1)
      return {
        ...state,
        loading: false,
        isSearching: false,
        searchedUsers: [],
        users
      }
    }
    case Actions.TOGGLE_FAVORITE_USER: {
      const { userIndex, actionIndex } = action.payload
      const users = [ ...state.users ]
      const index = users.findIndex((user) => user.id === userIndex)
      const toggledUser = users.splice(index, 1)[0]
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
        isSearching: false,
        searchedUsers: [],
        users: favoriteUsers.concat(nonFavoriteUsers)
      }
    }
    case Actions.SEARCH_USER: {
      const users = [ ...state.users ]
      const searchedUsers = users.filter((user) => {
        const name = `${user.firstName} ${user.lastName}`
        return name.indexOf(action.payload) > -1
      })
      return {
        ...state,
        isSearching: true,
        searchedUsers
      }
    }
    case Actions.CLEAR_SEARCH_USER: {
      return {
        ...state,
        isSearching: false,
        searchedUsers: []
      }
    }
    default: {
      return state
    }
  }
}
export default usersReducer
