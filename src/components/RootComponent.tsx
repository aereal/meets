import * as React from 'react';

import AddMeetingButtonComponent from './AddMeetingButtonComponent';
import MeetingsListContainer from '../containers/MeetingsListContainer';
import AddUserButtonContainer from '../containers/AddUserButtonContainer';

const RootComponent = () => {
  return (
    <div>
      <MeetingsListContainer />
      <AddMeetingButtonComponent />
      <AddUserButtonContainer />
    </div>
  );
};

export default RootComponent;
