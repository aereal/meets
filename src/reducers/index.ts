// @flow

import { combineReducers } from 'redux';

import Meeting from '../models/Meeting';
import Person from '../models/Person';
import { Action, MemberAdded, CreateUserRequested, CreatedUserReceived } from '../actions';
import reorderMeetings from '../services/reorderMeetingsService';

type State = Meeting[];

type PeopleState = {
  people: Person[],
  isFetching: boolean,
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
  meetings(state: State = [], action: Action) {
    switch (action.type) {
      case 'MEETING_ADDED':
        return [
          ...state,
          new Meeting(action.id, []),
        ];
      case 'MEMBER_ADDED':
        const addMemberAction = action as MemberAdded;
        return state.map(meeting => {
          return (meeting.id === addMemberAction.id) ?
            meeting.withNewMember(addMemberAction.member) :
            meeting;
        });
      case 'REORDERED':
        return reorderMeetings(state);
      default:
        return state;
    }
  },
});

export default App
