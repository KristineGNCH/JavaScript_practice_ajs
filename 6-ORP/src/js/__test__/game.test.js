/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

import orderByProps from '../game';

test('Проверка сортировки свойств', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

    const received = orderByProps(obj, ['name', 'level']);
    const expected = [
        {key: "name", value: "мечник"}, // порядок взят из массива с ключами
        {key: "level", value: 2}, // порядок взят из массива с ключами
        {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
        {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
        {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
      ];

      expect(received).toEqual(expected);
})