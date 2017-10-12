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
  region: string,
};

class AddUserButton extends PureComponent<Props, State> {
  state: State;

  constructor() {
    super();
    this.state = {
      name: '',
      region: '',
    };
  }

  render() {
    const onChangeName: ChangeEventHandler<HTMLInputElement> = (event) => {
      this.setState({ name: event.target.value });
    };
    const onChangeRegion: ChangeEventHandler<HTMLInputElement> = (event) => {
      this.setState({ region: event.target.value });
    };
    const onClick: MouseEventHandler<HTMLElement> = (event) => {
      event.preventDefault();
      const { name, region } = this.state;
      const { onAddUser } = this.props;
      const newPerson = new Person(name, region);
      onAddUser(newPerson);
      this.setState({ name: '', region: '' });
    };
    return (
      <div>
        <div className="row">
          <div className="input-field col6">
            <input id="new_user_name" className="validate" type="text" onChange={onChangeName} value={this.state.name} />
            <label htmlFor="new_user_name">Name</label>
          </div>
          <div className="input-field col6">
            <input id="new_user_region" className="validate" type="text" onChange={onChangeRegion} value={this.state.region} />
            <label htmlFor="new_user_region">Region</label>
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
