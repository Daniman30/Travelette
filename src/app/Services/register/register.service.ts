import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiRegister } from '../Models/listAgency.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:5094/api/identity/register'

  constructor(private http: HttpClient) { }

  registerPost(data: IApiRegister){
    return this.http.post(this.url, data)
  }
}
