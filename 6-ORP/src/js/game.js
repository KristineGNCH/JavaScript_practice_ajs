/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

export default function orderByProps(obj, arr) {
    const massiv = [];
    const massiv2 = [];

    for (const prop in obj) {
        const newObj = { key: prop, value: obj[prop] };

        if (arr.indexOf(prop) === 0) {
            massiv2.push(newObj);
        } else {
            massiv[arr.indexOf(prop)] = newObj;
        }

        massiv2.sort((a, b) => {
            if (a.key > b.key) {
                return 1;
            }
            return -1;
        });
    }

    const massiv3 = [...massiv, ...massiv2];
    return massiv3;
}
