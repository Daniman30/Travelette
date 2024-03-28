import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteHotelOffersService {

  private baseurl = 'http://localhost:5094/api/LodgingOffer'
  constructor(private http: HttpClient) { }

  deleteHotelOffer(lodgingOfferId: number){
    const url = `${this.baseurl}/delete?lodgingOfferId=${lodgingOfferId}`
    return this.http.delete(url)
  }
}
