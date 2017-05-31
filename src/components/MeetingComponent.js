// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import Person from '../models/Person';
import MemberComponent from './MemberComponent';

type MeetingComponentProps = {
  meetingId: number,
  members: Person[],
  onClick: (meetingId: number, member: Person) => void,
};

const MeetingComponent = ({ meetingId, members, onClick }: MeetingComponentProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Meeting {meetingId}</span>
        <p>
          {members.map(m => <MemberComponent key={m.name} name={m.name} avatarUrl={m.avatarUrl} />)}
        </p>
      </div>
      <div className="card-action">
        <button className="waves-effect waves-teal btn-flat" onClick={() => onClick(meetingId, new Person(window.prompt("member name?")))}>
          Add Person
        </button>
      </div>
    </div>
  );
};

export default MeetingComponent;
