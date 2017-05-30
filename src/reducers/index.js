// @flow

import { combineReducers } from 'redux';

const meeting = (state, action) => {
  switch (action.type) {
    case 'ADD_MEETING':
      return {
        id: action.id,
        members: [],
      };
    case 'ADD_MEMBER':
      if (state.id !== action.id) {
        return state;
      }

      return ({
        id: state.id,
        members: state.members.concat([action.member]),
      });
    default:
      return state;
  }
};

const App = combineReducers({
  meetings(state = [], action) {
    switch (action.type) {
      case 'ADD_MEETING':
        return state.concat([meeting(undefined, action)]);
      case 'ADD_MEMBER':
        return state.map(st => meeting(st, action));
      default:
        return state;
    }
  },
});

export default App
