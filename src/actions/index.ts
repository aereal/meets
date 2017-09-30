import Person from '../models/Person';
import 'whatwg-fetch';

let meetingId = 0;
export const addMeeting = (): MeetingAdded => {
  return ({
    type: 'MEETING_ADDED',
    id: meetingId++,
    members: [],
  });
};
export type MeetingAdded = {
  type: 'MEETING_ADDED',
  id: number,
  members: Person[],
};

export const addMember = (meetingId: number, member: Person): MemberAdded => {
  return ({
    type: 'MEMBER_ADDED',
    id: meetingId,
    member: member,
  });
};
export type MemberAdded = {
  type: 'MEMBER_ADDED',
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
    .then(() => { // TODO take json parameter
      return person;
    })
};

export const createUser = (person: Person): (dispatch: any) => Promise<any> => {
  return (dispatch: any) => {
    dispatch(requestCreateUser(person));

    return doCreateUser(person).then(created => {
      dispatch(receiveCreatedUser(created));
    });
  };
};

export type Action = MeetingAdded | MemberAdded | Reorder | RequestCreateUserAction | ReceiveCreatedUserAction;
