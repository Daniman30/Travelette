import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SortBlockPackageComponent } from './sort-block-package/sort-block-package.component';
import { CommonModule } from '@angular/common';
import { MovPackageService } from '../../Services/MovimientoDatos/mov-package.service';
import { PackageService } from '../../Services/package.service';
import { IApiCreateFacility } from '../../Services/Models/listAgency.interface';

@Component({
    selector: 'app-package-body',
    standalone: true,
    imports: [RouterModule, SortBlockPackageComponent, CommonModule],
    templateUrl: './package-body.component.html',
    styleUrl: './package-body.component.css'
})
export class PackageBodyComponent {
    constructor(private movPackageService: MovPackageService,
        private packageService: PackageService,
        private router: Router) { }
    products: any[] = []

    ngOnInit(): void {
        this.packageService.listPackages().subscribe((data) => (this.products = data.items))
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
