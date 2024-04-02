import { BookPackageService } from './../../Services/book-package.service';
import { CommonModule } from '@angular/common';
import { MovPackageService } from './../../Services/MovimientoDatos/mov-package.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PackageService } from '../../Services/package.service';
import { BookingsService } from '../../Services/MovimientoDatos/bookings.service';

@Component({
    selector: 'app-package-booking',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './package-booking.component.html',
    styleUrl: './package-booking.component.css'
})
export class PackageBookingComponent implements OnInit{
    constructor(private movPackageService: MovPackageService,
        private bookPackageService: BookPackageService,
        private packageService: PackageService,
        private bookingsService: BookingsService,
        private router: Router) {}
    ngOnInit(): void {
        this.packageService.listPackages().subscribe((data) => (this.products = data.items))
    }

    products: any[] = []

    packageDescription = this.movPackageService.MovPackage.description
    packagePrice = this.movPackageService.MovPackage.price
    packageCapacity = this.movPackageService.MovPackage.capacity
    packageDuration = this.movPackageService.MovPackage.duration
    packageStartDate = this.movPackageService.MovPackage.startDate
    packageEndDate = this.movPackageService.MovPackage.endDate
    packageAgencyID = this.movPackageService.MovPackage.agencyID
    packageFacilitiesId = this.movPackageService.MovPackage.facilitiesId
    packageExcursionsId = this.movPackageService.MovPackage.excursionsId

    BookPackage() {
        this.movPackageService.type = 'bookPackage'
        this.router.navigate(['../../booking'])
    }

    ViewPackage(id:number, name: string, capacity: number, price: number, duration: number, departureDate: Date, arrivalDate: Date, agencyID: number, facilitiesId: any) {
        this.movPackageService.idPackage = id
        this.movPackageService.MovPackage.description = name
        this.movPackageService.MovPackage.capacity = capacity
        this.movPackageService.MovPackage.price = price
        this.movPackageService.MovPackage.duration = duration
        this.movPackageService.MovPackage.startDate = departureDate
        this.movPackageService.MovPackage.endDate = arrivalDate
        this.movPackageService.MovPackage.agencyID = agencyID
        this.movPackageService.MovPackage.facilitiesId = facilitiesId
        this.router.navigate(['../package/booking'])
    }
}


// this.agencyService.createAgencyPost(post).subscribe({
//     next: (response) => { this.listAgency() }
// })