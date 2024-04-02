import { Injectable } from '@angular/core';
import { IApiBookExcursion, IApiBookExcursionAdmin } from './Models/listAgency.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookExcursionService {

    constructor(private http: HttpClient) { }

    bookExcursion(data: IApiBookExcursion) {
        const token = localStorage.getItem('access_token');
        const tokenJson = JSON.parse(token)
        const finaltoken = tokenJson.token;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${finaltoken}`);
        return this.http.post('http://localhost:5094/api/BookExcursion/book', data, { headers })
    }

    bookExcursionAdmin(data: IApiBookExcursionAdmin) {
        const token = localStorage.getItem('access_token');
        const tokenJson = JSON.parse(token)
        const finaltoken = tokenJson.token;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${finaltoken}`);
        return this.http.post('http://localhost:5094/api/BookExcursion/bookByAdmin', data, { headers })
    }
}
