class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(user, pass, cb) {
        if(user === "user" && pass === "user") {
            this.authenticated = true;
            cb();
        }
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();