// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import Person from '../models/Person';

type Props = {
  region: string,
  onClick: (member: Person) => void,
};

const AddMemberButtonComponent = ({ region, onClick }: Props) => {
  return (
    <button className="waves-effect waves-teal btn-flat" onClick={() => onClick(new Person(window.prompt("member name?"), region))}>
      Add {region} Person
    </button>
  );
};

export default AddMemberButtonComponent;
