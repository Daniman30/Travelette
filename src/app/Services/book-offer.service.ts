import { Injectable } from '@angular/core';
import { IApiBook, IApiBookAdmin } from './Models/listAgency.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookOfferService {

    constructor(private http: HttpClient) { }

    bookOffer(data: IApiBook) {
        return this.http.post('http://localhost:5094/api/BookOffer/book', data)
    }

    bookOfferAdmin(data: IApiBookAdmin) {
        return this.http.post('http://localhost:5094/api/BookOffer/bookByAdmin', data)
    }
}
