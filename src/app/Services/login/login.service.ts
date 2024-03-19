import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiLogin } from '../Models/listAgency.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:5094/api/identity/login'

  constructor(private http: HttpClient) { }

  loginPost(data: IApiLogin){
    return this.http.post(this.url, data)
  }
}
