import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiListAgency } from '../Models/listAgency.interface';

@Injectable({
  providedIn: 'root'
})
export class ListAgencyService {

  httpClient = inject(HttpClient)

  private readonly url = 'http://localhost:5094/api/Agency/list'

  constructor() { }

  listAgencies(){
    return this.httpClient.get<IApiListAgency[]>(this.url)
  }
}
