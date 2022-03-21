export class LoginInfo {
    username: string = '';
    password: string = '';

    init(u:string, p:string) {
        this.username = u;
        this.password = p;
    }

    getName() {
        return this.username;
    }

    getPass() {
        return this.password;
    }
}

const admin = new LoginInfo();
admin.init("admin", "123");

const user = new LoginInfo();
user.init("user", "456");

export {admin, user}
