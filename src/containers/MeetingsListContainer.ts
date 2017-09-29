// @flow

import { connect } from 'react-redux';

import MeetingsListComponent from '../components/MeetingsListComponent';
import { addMember } from '../actions';
import Person from '../models/Person';
import Meeting from '../models/Meeting';

const mapStateToProps = (args: any) => {
  const { meetings } = args;
  return ({
    meetings: meetings as Meeting[],
  });
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return ({
    onAddMember: (meetingId: number, member: Person, region: string) => {
      dispatch(addMember(meetingId, member, region));
    },
  });
};

const MeetingsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingsListComponent);

export default MeetingsListContainer;
