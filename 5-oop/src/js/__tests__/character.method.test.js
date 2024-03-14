/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Character from '../character';

test('Выброс ошибки, невозможно повысить показатели, персонаж мертв', () => {
    const pers1 = new Character('Орк', 'Daemon');

    pers1.health = 100;
    pers1.level = 10;
    pers1.attack = 10;
    pers1.defence = 40;
    pers1.levelUp();

    expect(pers1.health).toBe(100);
    expect(pers1.level).toBe(11);
    expect(pers1.attack).toBe(12);
    expect(pers1.defence).toBe(48);

    pers1.health = 0;

    expect(() => { pers1.levelUp(); }).toThrow('Персонаж мертв');
});
// eslint-disable-next-line linebreak-style

test('Проверка на улучшение показателей', () => {
    const pers2 = new Character('Вечный', 'Daemon');

    pers2.health = 2;
    pers2.level = 10;
    pers2.attack = 10;
    pers2.defence = 40;

    pers2.levelUp();

    const result = [pers2.level, pers2.attack, pers2.defence];
    const expected = [11, 12, 48];

    expect(result).toEqual(expected);
});

test('Проверка на нанесенный урон', () => {
    const pers1 = new Character('Орк', 'Daemon');
    pers1.defence = 40;
    pers1.damage(100);
    expect(pers1.health).toBe(40);
});
