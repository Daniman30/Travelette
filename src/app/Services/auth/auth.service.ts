import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/listAgency.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:5094/api/identity/register', user)
  }

  public login(user: User):Observable<string> {
    return this.http.post('http://localhost:5094/api/identity/login', user, {responseType: 'text'})
  }

  public getMe(): Observable<string> {
    return this.http.get<string>('http://localhost:5094/api/identity')
  }
}
