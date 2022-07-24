import 'isomorphic-fetch'

export class Request {
    private readonly basicUrl = 'https://todo-list-server-api-test.herokuapp.com/';

    async get(apiUrl: string) {
        const url = this.basicUrl + apiUrl;
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (e) {
            return new Error(e)
        }
    }
}

export const Api = new Request();