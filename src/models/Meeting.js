// @flow

import Person from './Person';

export default class Meeting {
  id: number;
  members: Person[];

  constructor(id: number, members: Person[]) {
    this.id = id;
    this.members = members;
  }
}
