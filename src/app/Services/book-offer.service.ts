import { Injectable } from '@angular/core';
import { IApiBook, IApiBookAdmin, IApiBookOffer, IApiBookOfferAdmin } from './Models/listAgency.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookOfferService {

    constructor(private http: HttpClient) { }

    bookOffer(data: IApiBookOffer) {
        const token = localStorage.getItem('access_token');
        const tokenJson = JSON.parse(token)
        const finaltoken = tokenJson.token;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${finaltoken}`);
        return this.http.post('http://localhost:5094/api/BookOffer/book', data, { headers })
    }

    bookOfferAdmin(data: IApiBookOfferAdmin) {
        const token = localStorage.getItem('access_token');
        const tokenJson = JSON.parse(token)
        const finaltoken = tokenJson.token;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${finaltoken}`);
        return this.http.post('http://localhost:5094/api/BookOffer/bookByAdmin', data, { headers })
    }
}
