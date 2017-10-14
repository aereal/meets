import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { createMeeting } from '../actions/';
import { GlobalState } from '../reducers/';
import { AddMeetingButtonProps } from '../components/AddMeetingButtonComponent';
import AddMeetingButtonComponent from '../components/AddMeetingButtonComponent';
import Person from '../models/Person';

const mapStateToProps = (args: GlobalState) => {
  const { meetings } = args;
  return {
    meetings: meetings.meetings,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>): AddMeetingButtonProps => {
  return {
    onAddMeeting: (owner: Person) => {
      dispatch(createMeeting(owner));
    },
  };
};

const AddMeetingButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMeetingButtonComponent);

export default AddMeetingButtonContainer;
