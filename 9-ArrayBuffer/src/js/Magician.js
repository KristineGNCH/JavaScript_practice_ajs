import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 13;
    this.defence = 40;
  }
}
