// @flow

export default class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  get avatarUrl(): string {
    return `https://cdn.www.st-hatena.com/users/__/${this.name}/profile.gif`;
  }
}
