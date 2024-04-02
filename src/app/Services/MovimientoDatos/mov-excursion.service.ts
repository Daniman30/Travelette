import { Injectable } from '@angular/core';
import { IApiListExcursion } from '../Models/listAgency.interface'; 

@Injectable({
    providedIn: 'root'
})
export class MovExcursionService {

    constructor() { }

    type: string

    MovExcursion: IApiListExcursion = {
        id: 0,
        name: '',
        capacity: 0,
        price: 0,
        departurePlace: '',
        arrivalPlace: '',
        departureDate: new Date(),
        arrivalDate: new Date(),
        guia: '',
        agencyID: 0
    }
}
