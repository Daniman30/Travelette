import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IApiListUser, IApiLogin, IApiRegister } from './Models/listAgency.interface';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    loginPost(data: IApiLogin) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'text/plain'
        })

        return this.http.post('http://localhost:5094/api/identity/login', data, { headers, responseType: 'text' }).pipe(tap(res => {
            localStorage.setItem('access_token', res);
        }))
    }

    registerPost(data: IApiRegister) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'text/plain'
        })
        return this.http.post('http://localhost:5094/api/identity/register', data, { headers, responseType: 'text' }).pipe(tap(res => {
            localStorage.setItem('access_token', res);
        }))
    }

    listUsers() {
        return this.http.get<IApiListUser[]>('http://localhost:5094/api/identity/list')
    }
}
