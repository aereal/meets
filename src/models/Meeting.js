// @flow

import Person from './Person';

export default class Meeting {
  id: number;
  members: Person[];

  constructor(id: number) {
    this.id = id;
    this.members = [];
  }
}
