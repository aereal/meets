import Person from '../models/Person';
import Meeting from '../models/Meeting';
import 'whatwg-fetch';

export type CreateMeetingRequested = {
  type: 'CREATE_MEETING_REQUESTED',
  owner: Person,
};

export const requestCreateMeeting = (owner: Person): CreateMeetingRequested => {
  return ({
    type: 'CREATE_MEETING_REQUESTED',
    owner,
  });
};

export type CreateMeetingReceived = {
  type: 'CREATE_MEETING_RECEIVED',
  createdMeeting: Meeting,
};

export const receiveCreateMeeting = (createdMeeting: Meeting): CreateMeetingReceived => {
  return ({
    type: 'CREATE_MEETING_RECEIVED',
    createdMeeting,
  });
};

const doCreateMeeting = (owner: Person): Promise<Meeting> => {
  return fetch(`/api/meetings?user_name=${owner.name}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      description: '', // TODO
    }),
  })
    .then(res => res.json())
    .then((decoded: any) => {
      return new Meeting(decoded.id, decoded.members.map((m: any) => new Person(m.name, m.location)));
    });
};

export const createMeeting = (owner: Person): (dispatch: any) => Promise<void> => {
  // TODO: any
  return (dispatch: any) => {
    dispatch(requestCreateMeeting(owner));

    return doCreateMeeting(owner)
      .then(createdMeeting => dispatch(receiveCreateMeeting(createdMeeting)));
  };
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
  fetchedMeetings: Meeting[],
};

export const receiveMeetings = (fetchedMeetings: Meeting[]): MeetingsReceived => {
  return ({
    type: 'MEETINGS_RECEIVED',
    fetchedMeetings,
  });
};

const doFetchMeetings = (): Promise<Meeting[]> => {
  return fetch('/api/meetings/today')
    .then(res => res.json())
    .then(decoded => {
      const fetched: Meeting[] = decoded.map((d: any) => new Meeting(d.id, d.members.map((m: any) => new Person(m.name, m.location))));
      return fetched;
    });
};

export const fetchMeetings = (): (dispatch: any) => Promise<any> => {
  // TODO: any
  return (dispatch: any) => {
    dispatch(requestMeetings());

    return doFetchMeetings().then(meetings => {
      dispatch(receiveMeetings(meetings));
    });
  };
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
      location: person.location,
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

export type Action = CreateMeetingRequested | CreateMeetingReceived | MeetingsRequested | MeetingsReceived | MemberAdded | Reordered | CreateUserRequested | CreatedUserReceived;
