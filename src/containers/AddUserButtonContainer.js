// @flow

import { connect } from 'react-redux';

import AddUserButtonComponent from '../components/AddUserButtonComponent';
import { createUser } from '../actions';
import Person from '../models/Person';

const mapStateToProps = ({ people }) => {
  return ({
    people,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const props = ({
    onAddUser: (person: Person) => {
      const ret = dispatch(createUser(person));
      ret.then(createdUser => {
      });
    },
  });
  return props;
};

const AddUserButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserButtonComponent);

export default AddUserButtonContainer;
