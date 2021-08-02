import React from 'react';
import { useDispatch } from 'react-redux'
import { IconButton } from '../../base-components';
import { deleteUser, toggleFavoriteUser } from "../../redux/actions/users";

function User({
  id,
  userIndex,
  actions,
  firstName,
  lastName,
  isFriend
}) {
  const dispatch = useDispatch()
  const deleteFriend = (index) => {
    dispatch(deleteUser(index))
  }
  const toggleFavoriteFriend = (index, actIndex) => {
    dispatch(toggleFavoriteUser(index, actIndex))
  }
  return (
    <div className="user" key={id}>
        <div className="details">
            <div className="name">{`${firstName} ${lastName}`}</div>
            <div className="relation">{isFriend ? 'is your friend' : 'is not your friend' }</div>
        </div>
        <div className="actions">
          {
            actions?.length > 0 && actions.map((action, actionIndex) => {
                return <IconButton {...action} key={action.id} onClick={() => {
                  let fn = action.type === 'delete' ? deleteFriend : toggleFavoriteFriend
                  fn(id, actionIndex)
                }}/>
            })
          }
        </div>
    </div>
  );
}
export default User;