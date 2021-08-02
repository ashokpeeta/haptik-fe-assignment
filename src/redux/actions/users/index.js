
import { GET_USERS_ERROR, GET_USERS_LOADING,
  GET_USERS_SUCCESS, ADD_USER, DELETE_USER, TOGGLE_FAVORITE_USER
} from './constants'
import { v4 as uuidv4 } from 'uuid';

const mockUserData = [
  {
    id: uuidv4(),
    firstName: 'Johnathan',
    lastName: 'Wick',
    isFriend: true,
    actions: [
      {
        id: uuidv4(),
        type: 'non-favorite'
      },
      {
        id: uuidv4(),
        type: 'delete'
      }
    ]
  },
  {
    id: uuidv4(),
    firstName: 'Amethius',
    lastName: 'Truebourn',
    isFriend: true,
    actions: [
      {
        id: uuidv4(),
        type: 'non-favorite'
      },
      {
        id: uuidv4(),
        type: 'delete'
      }
    ]
  },
]

export function getAllUsers(data) {
    return async (dispatch) => {
      dispatch({
        type: GET_USERS_LOADING
      })
      try {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: mockUserData,
        })
      } catch (error) {
        dispatch({
          type: GET_USERS_ERROR
        })
      }
    }
}

export function addUser(firstName, lastName) {
  return {
    type: ADD_USER,
    payload: {
      id: uuidv4(),
      firstName,
      lastName,
      isFriend: true,
      actions: [
        {
          id: uuidv4(),
          type: 'non-favorite'
        },
        {
          id: uuidv4(),
          type: 'delete'
        }
      ]
    }
  }
}

export function deleteUser(index) {
  return {
    type: DELETE_USER,
    payload: index
  }
}

export function toggleFavoriteUser(userIndex, actionIndex) {
  return {
    type: TOGGLE_FAVORITE_USER,
    payload: { userIndex, actionIndex }
  }
}