/* eslint-disable semi */
/* eslint-disable function-paren-newline */
/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-extra-semi */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

export default class Team {
    constructor() {
        this.members = new Set([
            {
                name: 'Ink'
            },
            {
                name: 'Fes'
            },
            {
                name: 'Ser'
            }
        ]);
    }
    add(name) {
        this.members.forEach(
            item => {
                if (item === name) {
                    throw new error('Данный персонаж уже участвовал. Выберите другого персонажа');
                }
            }
        );
        this.members.add(name);
    };

    addAll(...name) {
        name.forEach((item) => {
            this.add(item);
        }
        )
    };

    toArray() {
        return [...this.members];
    };
}