// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import AddMeetingButtonComponent from './AddMeetingButtonComponent';
import MeetingsListContainer from '../containers/MeetingsListContainer';

const RootComponent = () => {
  return (
    <div>
      <MeetingsListContainer />
      <AddMeetingButtonComponent />
    </div>
  );
};

export default RootComponent;
