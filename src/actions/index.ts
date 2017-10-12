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

export type MeetingsRequested = {
  type: 'MEETINGS_REQUESTED',
};

export const requestMeetings = (): MeetingsRequested => {
  return ({
    type: 'MEETINGS_REQUESTED',
  });
};

export type MeetingsReceived = {
  type: 'MEETINGS_RECEIVED',
};

export const receiveMeetings = (): MeetingsReceived => {
  return ({
    type: 'MEETINGS_RECEIVED',
  });
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
    type: 'REORDERED',
  };
};
export type Reordered = {
  type: 'REORDERED',
};

export type CreateUserRequested = {
  type: 'CREATE_USER_REQUESTED',
  person: Person,
};

export const requestCreateUser = (person: Person): CreateUserRequested => {
  return ({
    type: 'CREATE_USER_REQUESTED',
    person: person,
  });
};

export type CreatedUserReceived = {
  type: 'CREATED_USER_RECEIVED',
  createdUser: Person,
};

export const receiveCreatedUser = (created: Person) => {
  return ({
    type: 'CREATED_USER_RECEIVED',
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

export type Action = MeetingsRequested | MeetingsReceived | MeetingAdded | MemberAdded | Reordered | CreateUserRequested | CreatedUserReceived;
