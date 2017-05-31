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

const renderPlaceholder = () => {
  return (
    <div className="card-panel">
      Click button
      {" "}
      <button className="btn-floating btn-large red waves-effect waves-light">
        <i className="material-icons">add</i>
      </button>
      {" "}
      at bottom-right!
    </div>
  );
};

const MeetingsListComponent = ({ meetings = [], onAddMember }: MeetingsListProps) => {
  return meetings.length === 0 ?
    renderPlaceholder() :
    (
      <div>{meetings.map(m => <MeetingComponent key={m.id} meetingId={m.id} members={m.members} onClick={onAddMember} />)}</div>
    );
};

export default MeetingsListComponent;
