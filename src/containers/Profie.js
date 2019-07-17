import React from 'react';
import { observer } from 'mobx-react';

export function ProfilePageContainer() {

  return (
    <div>
        <h1>Profile js</h1>
    </div>
  );
};

export const Profile = observer (ProfilePageContainer)