import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiCreateHotel, IApiListHotel, IApiListHotelResponse } from './Models/listAgency.interface';

@Injectable({
    providedIn: 'root'
})
export class HotelService {

    constructor(private http: HttpClient) { }

    createHotelPost(data: IApiCreateHotel) {
        return this.http.post('http://localhost:5094/api/Hotel/create', data)
    }

    deleteHotel(hotelId: number) {
        const url = `${'http://localhost:5094/api/Hotel'}/delete?hotel=${hotelId}`
        return this.http.delete(url)
    }

    httpClient = inject(HttpClient)
    listHotels() {
        return this.httpClient.get<IApiListHotelResponse>('http://localhost:5094/api/Hotel/list')
    }

    updateHotel(data: IApiListHotel) {
        return this.http.put('http://localhost:5094/api/Hotel/update', data)
    }
}
