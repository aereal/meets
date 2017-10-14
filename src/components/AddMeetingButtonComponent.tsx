import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { reorder } from '../actions';
import Person from '../models/Person';

export interface AddMeetingButtonProps {
  onAddMeeting: (owner: Person) => void;
}

const AddMeetingButton = (args: AddMeetingButtonProps) => {
  const { onAddMeeting } = args;
  const owner: Person = new Person('aereal', 'kyoto'); // TODO
  return (
    <div className="fixed-action-btn">
      <button className="btn-floating btn-large red waves-effect waves-light" onClick={() => onAddMeeting(owner)}>
        <i className="material-icons">add</i>
      </button>
      <ul>
        <li>
          <button className="btn-floating green">
            <i className="material-icons">reorder</i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AddMeetingButton;
