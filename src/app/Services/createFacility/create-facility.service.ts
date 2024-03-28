import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiCreateFacility } from '../Models/listAgency.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateFacilityService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:5094/api/Facility/create'

  createFacility(data: IApiCreateFacility) {
    return this.http.post(this.url, data)
  }
}
