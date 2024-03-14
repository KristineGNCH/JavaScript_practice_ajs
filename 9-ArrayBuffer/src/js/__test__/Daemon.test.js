// jshint esversion:6
import Daemon from '../Daemon';

test('проверка на создание персонажа Daemon', () => {
  expect(new Daemon('Evoker', 'Daemon', 10, 40, 100, 1)).toEqual({
    defence: 40,
    distance: 1,
    health: 100,
    level: 1,
    name: 'Evoker',
    setAttack: 10,
    type: 'Daemon',
  });
});

test('Daemon стандартная атака', () => {
  const character = new Daemon('Evoker', 'Daemon', 10, 40, 100, 1);
  character.attack = 100;
  expect(character.attack).toBe(100);
});

test('Daemon атакует на расстоянии 4 клеток', () => {
  const character = new Daemon('Evoker', 'Daemon', 10, 40, 100, 1);
  character.attack = 100;
  character.distance = 4;
  expect(character.attack).toBe(100);
});

test('Daemon атакует в состоянии "дурман" и на расстоянии 3-х клеток', () => {
  const character = new Daemon('Evoker', 'Daemon', 10, 40, 100, 1);
  character.attack = 100;
  character.distance = 3;
  character.stoned = true;
  expect(character.attack).toBe(100);
});

test('Daemon атакует < 0', () => {
  const character = new Daemon('Evoker', 'Daemon', 10, 40, 100, 1);
  character.attack = 1;
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(1);
});

test('Daemon в состоянии "дурман"', () => {
  const character = new Daemon('Evoker', 'Daemon', 10, 40, 100, 1);
  character.stoned = true;
  expect(character.stoned).toBe(true);
});
