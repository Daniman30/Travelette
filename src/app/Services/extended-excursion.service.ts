import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiCreateExtendedExcursion, IApiListExtendedExcursion } from './Models/listAgency.interface';

@Injectable({
    providedIn: 'root'
})
export class ExtendedExcursionService {

    constructor(private http: HttpClient) { }

    createExcursion(data: IApiCreateExtendedExcursion) {
        return this.http.post('http://localhost:5094/api/ExtendedExcursion/create', data)
    }

    listExcursion() {
        return this.http.get<IApiListExtendedExcursion[]>('http://localhost:5094/api/ExtendedExcursion/list')
    }

    deleteExcursion(id: number) {
        return this.http.delete(`http://localhost:5094/api/ExtendedExcursion/delete?excursion=${id}`)
    }
}
