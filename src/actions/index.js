// @flow

import Person from '../models/Person';

let meetingId = 0;
export const addMeeting = (): AddMeetingAction => {
  debugger;
  return ({
    type: 'ADD_MEETING',
    id: meetingId++,
    members: [],
  });
};
export type AddMeetingAction = {
  type: 'ADD_MEETING',
  id: number,
  members: Person[],
};

export const addMember = (meetingId: number, member: Person): AddMemberAction => {
  return ({
    type: 'ADD_MEMBER',
    id: meetingId,
    member: member,
  });
};
export type AddMemberAction = {
  type: 'ADD_MEMBER',
  id: number,
  member: Person,
};

export type Action = AddMeetingAction | AddMemberAction;
