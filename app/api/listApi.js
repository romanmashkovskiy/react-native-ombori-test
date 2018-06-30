export default class ListApi {
    static getList() {
        return fetch("https://reqres.in/api/users")
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }
}