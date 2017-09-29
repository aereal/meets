// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { addMeeting, reorder } from '../actions';

interface AddMeetingButtonProps {
  dispatch: any;
}

const AddMeetingButton = (args: AddMeetingButtonProps) => {
  const { dispatch } = args;
  return (
    <div className="fixed-action-btn">
      <button className="btn-floating btn-large red waves-effect waves-light" onClick={() => dispatch(addMeeting())}>
        <i className="material-icons">add</i>
      </button>
      <ul>
        <li>
          <button className="btn-floating green" onClick={() => dispatch(reorder())}>
            <i className="material-icons">reorder</i>
          </button>
        </li>
      </ul>
    </div>
  );
};

const AddMeetingButtonComponent = connect()(AddMeetingButton);

export default AddMeetingButtonComponent;
