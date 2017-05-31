// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import Person from '../models/Person';

type Props = {
  onClick: (member: Person) => void,
};

const AddMemberButtonComponent = ({ onClick }: Props) => {
  return (
    <button className="waves-effect waves-teal btn-flat" onClick={() => onClick(new Person(window.prompt("member name?")))}>
      Add Person
    </button>
  );
};

export default AddMemberButtonComponent;
