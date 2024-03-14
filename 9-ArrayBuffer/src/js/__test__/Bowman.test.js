// jshint esversion:6
import Bowman from '../Bowman';

test('проверка на создание персонажа Bowman', () => {
  expect(new Bowman('IronMan', 'Bowman', 25, 25, 100, 1)).toEqual({
    name: 'IronMan',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});
