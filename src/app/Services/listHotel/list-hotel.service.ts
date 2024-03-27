import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiListHotel } from '../Models/listAgency.interface';

@Injectable({
  providedIn: 'root'
})
export class ListHotelService {

  httpClient = inject(HttpClient)

  private readonly url = 'http://localhost:5094/api/Hotel/list'

  constructor() { }

  listHotels(){
    return this.httpClient.get<IApiListHotel[]>(this.url)
  }
}
