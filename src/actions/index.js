// @flow

import Person from '../models/Person';

let meetingId = 0;
export const addMeeting = () => {
  debugger;
  return ({
    type: 'ADD_MEETING',
    id: meetingId++,
    members: [],
  });
};

export const addMember = (meetingId: number, member: Person) => {
  return ({
    type: 'ADD_MEMBER',
    id: meetingId,
    member: member,
  });
};
