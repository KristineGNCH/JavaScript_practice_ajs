import ErrorRepository from '../error';

const errorRep = new ErrorRepository();


errorRep.error.set(200, 'OK');

test('Проверяем на возможность получить текст ошибки', () => {
    expect(errorRep.translate(200)).toBe('OK');
});

test('Проверяем на возможность получить текст ошибки', () => {
    expect(errorRep.translate(0)).toBe('Unknown error');
});


