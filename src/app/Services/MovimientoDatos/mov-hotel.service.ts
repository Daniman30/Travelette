import { Injectable } from '@angular/core';
import { Hotel } from '../Models/listAgency.interface';

@Injectable({
    providedIn: 'root'
})
export class MovHotelService {

    constructor() { }

    MovHotel: Hotel = {
    lodgingOffers: [
        {
            id: 0,
            hotelId: 0,
            description: "",
            price: 0
        }
    ],
    id: 0,
    name: "",
    category: "",
    address: ""
};
}
