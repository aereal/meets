// @flow

import { connect } from 'react-redux';

import MeetingsListComponent from '../components/MeetingsListComponent';
import { CallbackProps } from '../components/MeetingsListComponent';
import { addMember, fetchMeetings } from '../actions';
import Person from '../models/Person';
import Meeting from '../models/Meeting';
import { GlobalState } from '../reducers/';

const mapStateToProps = (args: GlobalState) => {
  const { meetings } = args;
  return ({
    meetings: meetings.meetings,
  });
};

const mapDispatchToProps = (dispatch: any): CallbackProps => {
  return ({
    onAddMember: (meetingId: number, member: Person) => {
      dispatch(addMember(meetingId, member));
    },
    onFetchMeetings: () => {
      dispatch(fetchMeetings());
    },
  });
};

const MeetingsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingsListComponent);

export default MeetingsListContainer;
