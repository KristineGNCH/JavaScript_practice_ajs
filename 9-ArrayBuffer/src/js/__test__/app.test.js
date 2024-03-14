
import ArrayBufferConverter from '../app';
import getBuffer from '../Array-Buffer';

test('Проверка загрузки данных и преобразование их в строку', () => {
    const arrayBufferConverter = new ArrayBufferConverter();

    arrayBufferConverter.load(getBuffer());
    expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})