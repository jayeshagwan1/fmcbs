import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
    constructor(
        public email: string,
        public password: string) { }
}

var users = [
    new User('admin@fmc.com', 'admin@123'),
    new User('user@fmc.com', 'user@123')
];

@Injectable()
export class AuthenticationService {

    constructor(
        private _router: Router) { }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    }

    login(user:any) {
        var authenticatedUser = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", authenticatedUser.email);
            this._router.navigate(['home']);
            return true;
        }
        return false;

    }

    checkCredentials() {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['login']);
        }
    }
}