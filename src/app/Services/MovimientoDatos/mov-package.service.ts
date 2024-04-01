import { IApiCreatePackage } from './../Models/listAgency.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovPackageService {

    constructor() { }

    MovPackage: IApiCreatePackage = {
        description: '',
        price: 0,
        capacity: 0,
        duration: 0,
        startDate: new Date(),
        endDate: new Date(),
        agencyID: 0,
        facilityDtos: []
    }
}
