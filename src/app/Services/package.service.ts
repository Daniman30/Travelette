import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiCreatePackage, IApiListPackageResponse } from './Models/listAgency.interface';

@Injectable({
    providedIn: 'root'
})
export class PackageService {

    constructor(private http: HttpClient) { }

    createPackagePost(data: IApiCreatePackage) {
        return this.http.post('http://localhost:5094/api/Package/create', data)
    }

    deletePackage(packageId: number) {
        const url = `http://localhost:5094/api/Package/delete?packageId=${packageId}`
        return this.http.delete(url)
    }

    httpClient = inject(HttpClient)
    listPackages() {
        return this.httpClient.get<IApiListPackageResponse>('http://localhost:5094/api/Package/list')
    }

    updatePackage(data: IApiCreatePackage) {
        return this.http.put('http://localhost:5094/api/Package/update', data)
    }
}
