// @flow

import { combineReducers } from 'redux';

const App = combineReducers({
  meetings(state = [], action) {
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
        return state.map(meeting => {
          return (meeting.id === action.id) ?
            {
              id: meeting.id,
              members: meeting.members.concat([action.member]),
            } :
            meeting;
        });
      default:
        return state;
    }
  },
});

export default App
