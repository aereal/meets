// @flow

import Person from './Person';

export default class Meeting {
  id: number;
  members: Person[];

  constructor(id: number, members: Person[]) {
    this.id = id;
    this.members = members;
  }

  withNewMember(newMember: Person): Meeting {
    return new Meeting(
      this.id,
      this.members.concat([newMember]),
    );
  }
}
