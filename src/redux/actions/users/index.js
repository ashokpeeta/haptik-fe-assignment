
import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS } from './constants'
import { v4 as uuidv4 } from 'uuid';

const mockUserData = [
  {
    id: uuidv4(),
    firstName: 'Johnathan',
    lastName: 'Wick',
    isFriend: true,
    actions: [
      {
        type: 'non-favourite'
      },
      {
        type: 'delete'
      }
    ]
  },
  {
    id: uuidv4(),
    firstName: 'Amethius',
    lastName: 'Truebourn',
    isFriend: false,
    actions: [
      {
        type: 'non-favourite'
      },
      {
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