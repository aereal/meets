// @flow

import { connect } from 'react-redux';

import AddUserButtonComponent from '../components/AddUserButtonComponent';
import { createUser } from '../actions';
import Person from '../models/Person';

const mapStateToProps = (args: any) => {
  const { people } = args;
  debugger;
  return ({
    people: (people as Person[]),
  });
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  const props = ({
    onAddUser: (person: Person) => {
      const ret = dispatch(createUser(person));
      ret.then((createdUser: Person) => {
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
