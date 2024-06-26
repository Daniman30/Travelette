import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiCreateHotelOffer, IApiListHotelOffer, IApiListHotelOfferResponse } from './Models/listAgency.interface';

@Injectable({
    providedIn: 'root'
})
export class HotelOffersService {

    constructor(private http: HttpClient) { }

    createHotelOfferPost(data: IApiCreateHotelOffer) {
        return this.http.post('http://localhost:5094/api/LodgingOffer/create', data)
    }

    deleteHotelOffer(lodgingOfferId: number) {
        const url = `${'http://localhost:5094/api/LodgingOffer'}/delete?lodgingOfferId=${lodgingOfferId}`
        return this.http.delete(url)
    }

    httpClient = inject(HttpClient)
    listHotelOffers() {
        return this.httpClient.get<IApiListHotelOfferResponse>('http://localhost:5094/api/LodgingOffer/list')
    }

    updateHotelOffer(data: IApiCreateHotelOffer) {
        return this.http.put('http://localhost:5094/api/LodgingOffer/update', data)
    }
}
