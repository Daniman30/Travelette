import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiCreateAgency } from '../Models/listAgency.interface';

@Injectable({
    providedIn: 'root'
})
export class CreateAgencyService {

    private url = 'http://localhost:5094/api/Agency/create'

    constructor(private http: HttpClient) { }

    createAgencyPost(data: IApiCreateAgency) {
        return this.http.post(this.url, data)
    }
}
