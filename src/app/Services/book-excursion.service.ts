import { Injectable } from '@angular/core';
import { IApiBookExcursion, IApiBookExcursionAdmin } from './Models/listAgency.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookExcursionService {

    constructor(private http: HttpClient) { }

    bookExcursion(data: IApiBookExcursion) {
        return this.http.post('http://localhost:5094/api/BookOffer/book', data)
    }

    bookExcursionAdmin(data: IApiBookExcursionAdmin) {
        return this.http.post('http://localhost:5094/api/BookOffer/bookByAdmin', data)
    }
}
