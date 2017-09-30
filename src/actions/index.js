// @flow

import Person from '../models/Person';
import 'whatwg-fetch';

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

export type RequestCreateUserAction = {
  type: 'REQUEST_CREATE_USER',
  person: Person,
};

export const requestCreateUser = (person: Person): RequestCreateUserAction => {
  return ({
    type: 'REQUEST_CREATE_USER',
    person: person,
  });
};

export type ReceiveCreatedUserAction = {
  type: 'RECEIVE_CREATED_USER',
  createdUser: Person,
};

export const receiveCreatedUser = (created: Person) => {
  return ({
    type: 'RECEIVE_CREATED_USER',
    createdUser: created,
  });
};

const doCreateUser = (person: Person) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: person.name,
      location: person.region,
    }),
  })
    .then(res => res.json())
    .then(json => {
      return person;
    })
};

export const createUser = (person: Person): (any => any) /* TODO */ => {
  return (dispatch: any) => {
    dispatch(requestCreateUser(person));

    return doCreateUser(person).then(created => {
      dispatch(receiveCreatedUser(created));
    });
  };
};

export type Action = AddMeetingAction | AddMemberAction | Reorder | RequestCreateUserAction | ReceiveCreatedUserAction;
