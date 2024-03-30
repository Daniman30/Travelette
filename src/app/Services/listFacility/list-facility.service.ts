import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiListFacility } from '../Models/listAgency.interface';

@Injectable({
    providedIn: 'root'
})
export class ListFacilityService {

    httpClient = inject(HttpClient)

    private url = 'http://localhost:5094/api/Facility/list'

    constructor() { }

    listFacility() {
        return this.httpClient.get<IApiListFacility[]>(this.url)
    }
}
