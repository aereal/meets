// @flow

import { combineReducers } from 'redux';

import Meeting from '../models/Meeting';
import Person from '../models/Person';
import { Action, MemberAdded, RequestCreateUserAction, ReceiveCreatedUserAction } from '../actions';
import reorderMeetings from '../services/reorderMeetingsService';

type State = Meeting[];

type PeopleState = {
  people: Person[],
  isFetching: boolean,
};

const App = combineReducers({
  people(state: PeopleState = { people: [], isFetching: false }, action: Action /* TODO */) {
    switch (action.type) {
      case 'REQUEST_CREATE_USER':
        const requestAction = action as RequestCreateUserAction;
        return ({
          people: state.people,
          isFetching: true,
        });
      case 'RECEIVE_CREATED_USER':
        const receiveAction = action as ReceiveCreatedUserAction;
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
      case 'REORDER':
        return reorderMeetings(state);
      default:
        return state;
    }
  },
});

export default App
