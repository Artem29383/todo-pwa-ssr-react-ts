import 'isomorphic-fetch'

export class Request {

    async get() {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (e) {
            return new Error(e)
        }
    }
}

export const Api = new Request();