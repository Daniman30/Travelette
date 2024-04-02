import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UpdateService {
    typeService!: string

    id!: number;
    name!: string;
    address!: string;
    fax!: string;
    email!: string;

    idFacility!: number
    nameFacility!: string

    idHotel!: number
    nameHotel!: string
    categoryHotel!: string
    addressHotel!: string

    idExcursion!: number
    nameExcursion!: string
    capacityExcursion!: number
    priceExcursion!: number
    arrivalDateExcursion!: Date
    departureDateExcursion!: Date
    arrivalPlaceExcursion!: string
    departurePlaceExcursion!: string
    guiaExcursion!: string
    agencyIDExcursion!: number

    idOffers!: number
    hotelIdOffers!: number
    descriptionOffers!: string
    priceOffers!: number

    idPackage!: number
    descriptionPackage!: string
    pricePackage!: number
    capacityPackage!: number
    durationPackage!: number
    startDatePackage!: Date
    endDatePackage!: Date
    agencyIDPackage!: number
    facilitiesIdPackage!: { facilityId: number }
    excursionsIdPackage!: { excursionId: number }
}