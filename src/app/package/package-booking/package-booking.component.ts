import { CommonModule } from '@angular/common';
import { MovPackageService } from './../../Services/MovimientoDatos/mov-package.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-package-booking',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './package-booking.component.html',
    styleUrl: './package-booking.component.css'
})
export class PackageBookingComponent implements OnInit{
    constructor(private movPackageService: MovPackageService) {}
    ngOnInit(): void {
        console.log(this.packageFacilityDtos);
    }

    packageDescription = this.movPackageService.MovPackage.description
    packagePrice = this.movPackageService.MovPackage.price
    packageCapacity = this.movPackageService.MovPackage.capacity
    packageDuration = this.movPackageService.MovPackage.duration
    packageStartDate = this.movPackageService.MovPackage.startDate
    packageEndDate = this.movPackageService.MovPackage.endDate
    packageAgencyID = this.movPackageService.MovPackage.agencyID
    packageFacilityDtos = this.movPackageService.MovPackage.facilityDtos
}
