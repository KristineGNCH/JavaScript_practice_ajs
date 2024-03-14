import Character from '../character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

// eslint-disable-next-line no-undef
test.each([
  [Bowman],
  [Daemon],
  [Magician],
  [Swordsman],
  [Undead],
  [Zombie],
])(
  'Выброс ошибки в случае, если имя имеет тип отличный от типа "строка"',
  (Character) => {
    const result = () => new Character(123424);
    const expected = 'Имя персонажа должно иметь тип "строка"';

    // eslint-disable-next-line no-undef
    expect(result).toThrow(expected);
  },
);

// eslint-disable-next-line no-undef
test.each([
  [Bowman],
  [Daemon],
  [Magician],
  [Swordsman],
  [Undead],
  [Zombie],
])('Выброс ошибки в случае, если имя персонажа содержит менее 2-х символов', (Character) => {
  const result = () => new Character('a');
  const expected = 'Имя персонажа должно содержать от 2 до 10 символов';

  // eslint-disable-next-line no-undef
  expect(result).toThrow(expected);
});

// eslint-disable-next-line no-undef
test.each([
  [Bowman],
  [Daemon],
  [Magician],
  [Swordsman],
  [Undead],
  [Zombie],
])('Выброс ошибки в случае, если имя персонажа содержит более 10 символов', (Character) => {
  const result = () => new Character('LongHeroName');
  const expected = 'Имя персонажа должно содержать от 2 до 10 символов';

  // eslint-disable-next-line no-undef
  expect(result).toThrow(expected);
});

// eslint-disable-next-line no-undef
test('Выброс ошибки в случае, если тип персонажа неизвестен', () => {
  const result = () => new Character('Hero1', 'Archer');
  const expected = 'Неизвестный персонаж';

  // eslint-disable-next-line no-undef
  expect(result).toThrow(expected);
});

