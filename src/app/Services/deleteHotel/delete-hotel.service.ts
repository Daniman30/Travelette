import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteHotelService {

  private baseurl = 'http://localhost:5094/api/Hotel'
  constructor(private http: HttpClient) { }

  deleteHotel(hotelId: number){
    const url = `${this.baseurl}/delete?hotel=${hotelId}`
    return this.http.delete(url)
  }
}
