import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IApiListHotelOffer } from '../Models/listAgency.interface'

@Injectable({
    providedIn: 'root'
})
export class ListHotelOffersService {

    httpClient = inject(HttpClient)

    private url = 'http://localhost:5094/api/LodgingOffer/list'

    constructor() { }

    listHotelOffers() {
        return this.httpClient.get<IApiListHotelOffer[]>(this.url)
    }
}
