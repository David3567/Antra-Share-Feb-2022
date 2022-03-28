import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserValidatorService {
    API_URL = 'http://localhost:4231/api';
    API_Path = 'register'

    constructor(private http: HttpClient) { }

    checkUserName(username: string) {
        return this.http
            .get<string>(this.API_URL + '/' + this.API_Path + '/' + 'checkExistByUsername' + '/' + username);
    }

    checkUserEmail(email: string) {
        return this.http
            .get<string>(this.API_URL + '/' + this.API_Path + '/' + 'checkExistByEmail' + '/' + email);
    }
}