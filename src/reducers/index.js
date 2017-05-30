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
            members: action.members,
          }
        ];
      default:
        return state;
    }
  },
});

export default App
