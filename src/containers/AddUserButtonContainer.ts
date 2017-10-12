import { connect } from 'react-redux';

import AddUserButtonComponent from '../components/AddUserButtonComponent';
import { CallbackProps } from '../components/AddUserButtonComponent';
import { createUser } from '../actions';
import Person from '../models/Person';

const mapStateToProps = (args: any) => {
  const { people } = args;
  return ({
    people: (people as Person[]),
  });
};

const mapDispatchToProps = (dispatch: any): CallbackProps => {
  const props = ({
    onAddUser: (person: Person) => {
      const ret = dispatch(createUser(person));
      ret.then((createdUser: Person) => {
        console.log(createdUser)
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
