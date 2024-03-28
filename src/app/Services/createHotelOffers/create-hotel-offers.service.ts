import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiCreateHotelOffer } from '../Models/listAgency.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateHotelOffersService {

  private url = 'http://localhost:5094/api/LodgingOffer/create'
  constructor(private http: HttpClient) { }

  createHotelOfferPost(data: IApiCreateHotelOffer) {
    return this.http.post(this.url, data)
  }
}
