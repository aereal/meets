// @flow

import { connect } from 'react-redux';

import AddUserButtonComponent from '../components/AddUserButtonComponent';
import { addUser } from '../actions';
import Person from '../models/Person';

const mapStateToProps = ({ people }) => {
  return ({
    people,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const props = ({
    onAddUser: (person: Person) => {
      dispatch(addUser(person));
    },
  });
  return props;
};

const AddUserButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserButtonComponent);

export default AddUserButtonContainer;
