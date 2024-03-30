import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiListAgency } from '../Models/listAgency.interface';

@Injectable({
    providedIn: 'root'
})
export class ListAgencyService {

    httpClient = inject(HttpClient)

    private readonly url = 'http://localhost:5094/api/Agency/list'

    constructor() { }

    listAgencies() {
        const token = localStorage.getItem('access_token'); // Obtiene el token de acceso del localStorage
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.get<IApiListAgency[]>(this.url, { headers })
    }
}
