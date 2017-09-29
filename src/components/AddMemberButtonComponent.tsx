// @flow

import * as React from 'react';

import Person from '../models/Person';

type Props = {
  region: string,
  onClick: (member: Person) => void,
};

const AddMemberButtonComponent = ({ region, onClick }: Props) => {
  const onButtonClicked: () => void = () => {
    const name = window.prompt("member name?");
    const newPerson = new Person(name as string, region);
    onClick(newPerson);
  };
  return (
    <button className="waves-effect waves-teal btn-flat" onClick={onButtonClicked}>
      Add {region} Person
    </button>
  );
};

export default AddMemberButtonComponent;
