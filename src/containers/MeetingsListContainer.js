// @flow

import { connect } from 'react-redux';

import MeetingsListComponent from '../components/MeetingsListComponent';

const mapStateToProps = ({ meetings }) => {
  return ({
    meetings,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

const MeetingsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingsListComponent);

export default MeetingsListContainer;
