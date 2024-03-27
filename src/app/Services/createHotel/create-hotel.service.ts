import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiCreateHotel } from '../Models/listAgency.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateHotelService {

  private url = 'http://localhost:5094/api/Hotel/create'
  constructor(private http: HttpClient) { }

  createHotelPost(data: IApiCreateHotel){
    return this.http.post(this.url, data)
  }
}
