// @flow

export default class Person {
  name: string;
  location: string;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }

  get avatarUrl(): string {
    return `https://cdn.www.st-hatena.com/users/__/${this.name}/profile.gif`;
  }
}
