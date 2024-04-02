import { Injectable } from '@angular/core';
import { IApiBookPackage, IApiBookPackageAdmin } from './Models/listAgency.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookPackageService {

    constructor(private http: HttpClient) { }

    bookPackage(data: IApiBookPackage) {
        const token = localStorage.getItem('access_token');
        const tokenJson = JSON.parse(token)
        const finaltoken = tokenJson.token;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${finaltoken}`);
        return this.http.post('http://localhost:5094/api/BookPackage/book', data, { headers })
    }

    bookPackageAdmin(data: IApiBookPackageAdmin) {
        const token = localStorage.getItem('access_token');
        const tokenJson = JSON.parse(token)
        const finaltoken = tokenJson.token;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${finaltoken}`);
        return this.http.post('http://localhost:5094/api/BookPackage/bookByAdmin', data, { headers })
    }
}

// httpClient = inject(HttpClient)
//     listAgencies() {
//         const token = localStorage.getItem('access_token'); // Obtiene el token de acceso del localStorage
//         const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//         return this.http.get<IApiListAgencyResponse>('http://localhost:5094/api/Agency/list', { headers })
//     }