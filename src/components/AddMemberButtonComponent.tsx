// @flow

import * as React from 'react';

import Person from '../models/Person';

type Props = {
  location: string,
  onClick: (member: Person) => void,
};

const AddMemberButtonComponent = ({ location, onClick }: Props) => {
  const onButtonClicked: () => void = () => {
    const name = window.prompt("member name?");
    const newPerson = new Person(name as string, location);
    onClick(newPerson);
  };
  return (
    <button className="waves-effect waves-teal btn-flat" onClick={onButtonClicked}>
      Add {location} Person
    </button>
  );
};

export default AddMemberButtonComponent;
