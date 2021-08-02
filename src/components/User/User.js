import React from 'react';
import { IconButton } from '../../base-components';

function User({
  id,
  actions,
  firstName,
  lastName,
  isFriend
}) {
  return (
    <div className="user" key={id}>
        <div className="details">
            <div className="name">{firstName}</div>
            <div className="relation">{lastName}</div>
        </div>
        <div className="actions">
          {
            actions?.length > 0 && actions.map((action) => {
                return <IconButton {...action} />
            })
          }
        </div>
    </div>
  );
}
export default User;