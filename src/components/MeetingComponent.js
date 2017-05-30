// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import Person from '../models/Person';
import MemberComponent from './MemberComponent';

type MeetingComponentProps = {
  members: Person[],
};

const MeetingComponent = ({ members }: MeetingComponentProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Meeting 1</span>
        <p>
          {members.map(m => <MemberComponent name={m.name} avatarUrl={m.avatarUrl} />)}
        </p>
      </div>
      <div className="card-action">
        <button className="waves-effect waves-teal btn-flat">
          Add Person
        </button>
      </div>
    </div>
  );
};

export default MeetingComponent;
