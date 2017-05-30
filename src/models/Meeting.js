// @flow

import Person from './Person';

export default class Meeting {
  id: number;
  members: Person[];

  constructor(id) {
    this.id = id;
    this.members = [];
  }
}
