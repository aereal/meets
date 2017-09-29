// @flow

export default class Person {
  name: string;
  region: string;

  constructor(name: string, region: string) {
    this.name = name;
    this.region = region;
  }

  get avatarUrl(): string {
    return `https://cdn.www.st-hatena.com/users/__/${this.name}/profile.gif`;
  }
}
