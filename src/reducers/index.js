// @flow

import { combineReducers } from 'redux';

import Person from '../models/Person';
import type { Action, AddMemberAction } from '../actions';

type State = {
  id: number,
  members: Person[],
}[];

const App = combineReducers({
  meetings(state: State = [], action: Action) {
    switch (action.type) {
      case 'ADD_MEETING':
        return [
          ...state,
          {
            id: action.id,
            members: [],
          }
        ];
      case 'ADD_MEMBER':
        const addMemberAction = (action: AddMemberAction);
        return state.map(meeting => {
          return (meeting.id === addMemberAction.id) ?
            {
              id: meeting.id,
              members: meeting.members.concat([addMemberAction.member]),
            } :
            meeting;
        });
      default:
        return state;
    }
  },
});

export default App
