// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import MeetingComponent from './MeetingComponent';
import Meeting from '../models/Meeting';
import Person from '../models/Person';

type MeetingsListProps = {
  meetings: Meeting[],
};

const MeetingsListComponent = ({ meetings = [] }: MeetingsListProps) => {
  return (
    <div>{meetings.map(m => <MeetingComponent members={m.members} />)}</div>
  );
};

export default MeetingsListComponent;
