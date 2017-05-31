// @flow

import { connect } from 'react-redux';

import MeetingsListComponent from '../components/MeetingsListComponent';
import { addMember } from '../actions';
import Person from '../models/Person';

const mapStateToProps = ({ meetings }) => {
  return ({
    meetings,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
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
