import { Injectable } from '@angular/core';
import { IApiCreateAgencyOffer } from './Models/listAgency.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AgencyOfferService {

    constructor(private http: HttpClient) { }

    createAgencyOffer(data: IApiCreateAgencyOffer) {
        return this.http.post('http://localhost:5094/api/Agency/addoffer', data)
    }

    deleteAgencyOffer(id: number) {
        return this.http.delete(`http://localhost:5094/api/Agency/deleteoffer?agencyofferId=${id}`)
    }
}
