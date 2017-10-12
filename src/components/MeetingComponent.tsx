// @flow

import * as React from 'react';

import Person from '../models/Person';
import MemberComponent from './MemberComponent';
import AddMemberButtonComponent from './AddMemberButtonComponent';

type MeetingComponentProps = {
  meetingId: number,
  members: Person[],
  onClick: (meetingId: number, member: Person, region: string) => void,
};

const MeetingComponent = ({ meetingId, members, onClick }: MeetingComponentProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Meeting {meetingId}</span>
        <p>
          {members.map(m => <MemberComponent key={m.name} name={m.name} avatarUrl={m.avatarUrl} region={m.region} />)}
        </p>
      </div>
      <div className="card-action">
        <AddMemberButtonComponent region={"Tokyo"} onClick={(member: Person) => onClick(meetingId, member, "Tokyo")} />
        <AddMemberButtonComponent region={"Kyoto"} onClick={(member: Person) => onClick(meetingId, member, "Kyoto")} />
      </div>
    </div>
  );
};

export default MeetingComponent;
