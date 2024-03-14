export default class Character {
    constructor(name, type) {
        const Characters = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ];

        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя персонажа должно содержать от 2 до 10 символов');
        } else if (typeof name !== 'string') {
            throw new Error('Имя персонажа должно иметь тип "строка"');
        } else {
            this.name = name;
        }

        if (!Characters.includes(type)) {
            throw new Error('Неизвестный персонаж');
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error('Персонаж мертв');
        }
    }

    damage(points) {
        if (this.health >= 0) {
            const totalHealth = this.health - points * (1 - this.defence / 100);
            this.health = totalHealth >= 0 ? totalHealth : 0;
        }
    }
}
