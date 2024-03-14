/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
export default function specialAttack(obj) {
const result = [];
const { special } = obj;

special.forEach((data) => {
    const { id, name, description = 'Описание недоступно', icon } = data;
    result.push({ id, name, description, icon });
});

return result;
}
