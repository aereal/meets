// @flow

import { connect } from 'react-redux';

import MeetingsListComponent from '../components/MeetingsListComponent';
import { CallbackProps } from '../components/MeetingsListComponent';
import { addMember } from '../actions';
import Person from '../models/Person';
import Meeting from '../models/Meeting';

const mapStateToProps = (args: any) => {
  const { meetings } = args;
  return ({
    meetings: meetings as Meeting[],
  });
};

const mapDispatchToProps = (dispatch: any): CallbackProps => {
  return ({
    onAddMember: (meetingId: number, member: Person) => {
      dispatch(addMember(meetingId, member));
    },
  });
};

const MeetingsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingsListComponent);

export default MeetingsListContainer;
