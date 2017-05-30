// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import MeetingComponent from './MeetingComponent';
import Meeting from '../models/Meeting';
import Person from '../models/Person';

type MeetingsListProps = {
  meetings: Meeting[],
  onAddMember: () => void,
};

const MeetingsListComponent = ({ meetings = [], onAddMember }: MeetingsListProps) => {
  return (
    <div>{meetings.map(m => <MeetingComponent meetingId={m.id} members={m.members} onClick={onAddMember} />)}</div>
  );
};

export default MeetingsListComponent;
