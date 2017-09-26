// @flow

import Person from '../models/Person';

let meetingId = 0;
export const addMeeting = (): AddMeetingAction => {
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

export const addMember = (meetingId: number, member: Person, region: string): AddMemberAction => {
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

export const reorder = () => {
  return {
    type: 'REORDER',
  };
};
export type Reorder = {
  type: 'REORDER',
};

export type AddUserAction = {
  type: 'ADD_USER',
  person: Person,
};

export const addUser = (person: Person): AddUserAction => {
  return ({
    type: 'ADD_USER',
    person: person,
  });
};

export type Action = AddMeetingAction | AddMemberAction | Reorder | AddUserAction;
