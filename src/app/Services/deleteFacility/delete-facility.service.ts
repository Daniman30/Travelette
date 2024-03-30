import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DeleteFacilityService {

    private baseurl = 'http://localhost:5094/api/Facility'
    constructor(private http: HttpClient) { }

    deleteFacility(facilityId: number) {
        const url = `${this.baseurl}/delete?facility=${facilityId}`
        return this.http.delete(url)
    }
}
