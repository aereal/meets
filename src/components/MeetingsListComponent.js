// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import MeetingComponent from './MeetingComponent';
import Meeting from '../models/Meeting';

type MeetingsListProps = {
  meetings: Meeting[],
};

const MeetingsListComponent = ({ meetings = [] }: MeetingsListProps) => {
  return (
    <div>{meetings.map(m => <MeetingComponent />)}</div>
  );
};

export default MeetingsListComponent;
