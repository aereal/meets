import * as React from 'react';

import MeetingsListContainer from '../containers/MeetingsListContainer';
import AddUserButtonContainer from '../containers/AddUserButtonContainer';
import AddMeetingButtonContainer from '../containers/AddMeetingButtonContainer';

const RootComponent = () => {
  return (
    <div>
      <MeetingsListContainer />
      <AddMeetingButtonContainer />
      <AddUserButtonContainer />
    </div>
  );
};

export default RootComponent;
