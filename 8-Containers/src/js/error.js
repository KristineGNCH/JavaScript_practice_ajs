export default class ErrorRepository {
    constructor() {
        this.error = new Map();
    }

    translate(errorCode) {
        return this.error.has(errorCode) ? this.error.get(errorCode) : 'Unknown error';
    }
}