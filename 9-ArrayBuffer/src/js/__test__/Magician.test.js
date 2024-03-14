// jshint esversion:6
import Magician from '../Magician';

test('проверка на создание персонажа Magician', () => {
  expect(new Magician('Monk', 'Magician', 13, 40, 100, 1)).toEqual({
    defence: 40,
    distance: 1,
    health: 100,
    level: 1,
    name: 'Monk',
    setAttack: 10,
    type: 'Magician',
  });
});

test('Magician attacks regular', () => {
  const character = new Magician('Monk', 'Magician', 10, 40, 100, 1);
  character.attack = 100;
  expect(character.attack).toBe(100);
});

test('Magician атакует на расстоянии 4 клеток', () => {
  const character = new Magician('Monk', 'Magician', 10, 40, 100, 1);
  character.attack = 100;
  character.distance = 3;
  expect(character.attack).toBe(100);
});

test('Magician атакует в состоянии "дурман" и на расстоянии 3-х клеток', () => {
  const character = new Magician('Monk', 'Magician', 10, 40, 100, 1);
  character.attack = 100;
  character.distance = 3;
  character.stoned = true;
  expect(character.attack).toBe(100);
});

test('Magician атакует < 0', () => {
  const character = new Magician('Monk', 'Magician', 10, 40, 100, 1);
  character.attack = 1;
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(1);
});

test('Magician в состоянии "дурман"', () => {
  const character = new Magician('Monk', 'Magician', 10, 40, 100, 1);
  character.stoned = true;
  expect(character.stoned).toBe(true);
});
