import Team from '../game';
import Character from '../Character';

test('Проверка на добавление персонажа в игру', () => {
    const testTeam = new Team();
    const newCharacter = new Character();

    testTeam.add(newCharacter);

    const expected = testTeam.toArray();
    const result = { "name": "Ink" };

    expect(expected).toContainEqual(result);
});

