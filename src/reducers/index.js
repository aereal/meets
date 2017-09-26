// @flow

import { combineReducers } from 'redux';

import Meeting from '../models/Meeting';
import Person from '../models/Person';
import type { Action, AddMemberAction, AddUserAction } from '../actions';
import reorderMeetings from '../services/reorderMeetingsService';

type State = Meeting[];

type PeopleState = Person[];

const App = combineReducers({
  people(state: PeopleState = [], action: Action /* TODO */) {
    switch (action.type) {
      case 'ADD_USER':
        const addUserAction = (action: AddUserAction);
        return [
          ...state,
          addUserAction.person,
        ];
      default:
        return state;
    }
  },
  meetings(state: State = [], action: Action) {
    switch (action.type) {
      case 'ADD_MEETING':
        return [
          ...state,
          new Meeting(action.id, []),
        ];
      case 'ADD_MEMBER':
        const addMemberAction = (action: AddMemberAction);
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
