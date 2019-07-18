import React from 'react';
import { observer } from 'mobx-react';

function ProfilePageContainer() {

  return (
    <div>
        <h1>Profile js</h1>
    </div>
  );
};

export const Profile = observer (ProfilePageContainer)