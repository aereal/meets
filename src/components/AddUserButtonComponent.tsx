// @flow

import * as React from 'react';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { PureComponent } from 'react';
import {connect} from 'react-redux';

import Person from '../models/Person';

export interface CallbackProps {
  onAddUser: any;
}

interface Props extends CallbackProps {
  people: Person[];
}

type State = {
  name: string,
  location: string,
};

class AddUserButton extends PureComponent<Props, State> {
  state: State;

  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
    };
  }

  render() {
    const onChangeName: ChangeEventHandler<HTMLInputElement> = (event) => {
      this.setState({ name: event.target.value });
    };
    const onChangeLocation: ChangeEventHandler<HTMLInputElement> = (event) => {
      this.setState({ location: event.target.value });
    };
    const onClick: MouseEventHandler<HTMLElement> = (event) => {
      event.preventDefault();
      const { name, location } = this.state;
      const { onAddUser } = this.props;
      const newPerson = new Person(name, location);
      onAddUser(newPerson);
      this.setState({ name: '', location: '' });
    };
    return (
      <div>
        <div className="row">
          <div className="input-field col6">
            <input id="new_user_name" className="validate" type="text" onChange={onChangeName} value={this.state.name} />
            <label htmlFor="new_user_name">Name</label>
          </div>
          <div className="input-field col6">
            <input id="new_user_location" className="validate" type="text" onChange={onChangeLocation} value={this.state.location} />
            <label htmlFor="new_user_location">Location</label>
          </div>
        </div>
        <div>
          <button className="btn-large red waves-effect waves-light" onClick={onClick}>
            <i className="material-icons">person_add</i>
          </button>
        </div>
      </div>
    );
  }
}

const AddUserButtonComponent = AddUserButton;

export default AddUserButtonComponent;
