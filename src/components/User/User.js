import React from 'react';
import { IconButton } from '../../base-components';

function User({ id, actions }) {
  return (
    <div className="user" key={id}>
        <div className="details">
            <div className="name">Ashok Peeta</div>
            <div className="relation">is your friend</div>
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