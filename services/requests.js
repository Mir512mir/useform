class Requests {
    constructor() {
        this.apiBase = 'http://49.13.31.246:9191/';
        this.token = localStorage.getItem('jwt');
        this.routes = {
            signin: 'signin',
            signup: 'signup',
            me: 'me',
            users:'users',

        }
    }

    //Запрос регистрация
    getRegistration(data) {
        return fetch(this.apiBase + this.routes.signup, {
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify(data),
            "method": "POST",
        })
            .then(res => res.json())
    }

    //Запрос на вход
    getEnter(data) {
        return fetch(this.apiBase + this.routes.signin, {
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
            method: "POST"
        })
            .then(res => res.json())
    }

    //Запрос на получения данных для нового пользователя

    getNewUser() {
        return fetch(this.apiBase + this.routes.me, {
            headers: {
                "content-type": "application/json",
                'x-access-token': this.token
            }
        })
            .then(res => res.json())
    }


    //Запрос на изменение данных
    putChangeData(myData) {
        return fetch(this.apiBase + this.routes.me, {
            headers: {
                "content-type": "application/json",
                "x-access-token": this.token
            },
            "body": JSON.stringify(myData),
            "method": "PUT"
        })
            .then(res => res.json())
    }
    //Запрос на получение информации о юзерах
    getUsers() {
        return fetch(this.apiBase + this.routes.users, {
            headers: {
                "content-type": "application/json",
                'x-access-token': this.token
            }
        })
            .then(res => res.json())
    }
}

export default Requests;