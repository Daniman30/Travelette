import { HttpClient } from '@angular/common/http';
import { IApiCreateExcursion, IApiListExcursion, IApiListExcursionResponse} from './Models/listAgency.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExcursionService {

    constructor(private http: HttpClient) { }

    createExcursion(data: IApiCreateExcursion) {
        return this.http.post('http://localhost:5094/api/Excursion/create', data)
    }

    listExcursion() {
        return this.http.get<IApiListExcursionResponse>('http://localhost:5094/api/Excursion/list')
    }

    deleteExcursion(id: number) {
        return this.http.delete(`http://localhost:5094/api/Excursion/delete?excursion=${id}`)
    }

    updateExcursion(data: IApiListExcursion) {
        return this.http.put('http://localhost:5094/api/Excursion/update', data)
    }
}
