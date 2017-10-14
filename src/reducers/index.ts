// @flow

import { combineReducers } from 'redux';

import Meeting from '../models/Meeting';
import Person from '../models/Person';
import {
  Action,
  MemberAdded,
  CreateUserRequested,
  CreatedUserReceived,
  MeetingsReceived,
  CreateMeetingReceived
} from '../actions';
import reorderMeetings from '../services/reorderMeetingsService';

type MeetingState = {
  meetings: Meeting[],
};

type PeopleState = {
  people: Person[],
  isFetching: boolean,
};

export type GlobalState = {
  people: PeopleState,
  meetings: MeetingState,
};

const App = combineReducers({
  people(state: PeopleState = { people: [], isFetching: false }, action: Action /* TODO */) {
    switch (action.type) {
      case 'CREATE_USER_REQUESTED':
        const requestAction = action as CreateUserRequested;
        return ({
          people: state.people,
          isFetching: true,
        });
      case 'CREATED_USER_RECEIVED':
        const receiveAction = action as CreatedUserReceived;
        const { createdUser } = receiveAction;
        const newState = ({
          isFetching: false,
          people: [
            ...state.people,
            createdUser,
          ],
        });
        return newState;
      default:
        return state;
    }
  },
  meetings(state: MeetingState = { meetings: [] }, action: Action) {
    switch (action.type) {
      case 'MEETINGS_REQUESTED':
        return state;
      case 'MEETINGS_RECEIVED':
        const meetingsReceived = action as MeetingsReceived;
        return {
          meetings: meetingsReceived.fetchedMeetings,
        };
      case 'CREATE_MEETING_RECEIVED':
        const meetingReceived = action as CreateMeetingReceived;
        return {
          meetings: [
            ...state.meetings,
            meetingReceived.createdMeeting,
          ],
        };
      case 'MEMBER_ADDED':
        const addMemberAction = action as MemberAdded;
        return {
          meetings: state.meetings.map(meeting => {
            return (meeting.id === addMemberAction.id) ?
              meeting.withNewMember(addMemberAction.member) :
              meeting;
          }),
        };
      case 'REORDERED':
        return {
          meetings: reorderMeetings(state.meetings),
        };
      default:
        return state;
    }
  },
});

export default App
