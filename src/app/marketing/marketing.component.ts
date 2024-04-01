import { FacilityService } from '../Services/facility.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExcursionService } from '../Services/excursion.service';
import { PackageService } from '../Services/package.service';
import { ExtendedExcursionService } from '../Services/extended-excursion.service';
import { UpdateService } from '../Services/MovimientoDatos/update.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-marketing',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './marketing.component.html',
    styleUrl: './marketing.component.css'
})
export class MarketingComponent {

    constructor(private facilityService: FacilityService,
        private excursionService: ExcursionService,
        private packageService: PackageService,
        private extendedexcursionService: ExtendedExcursionService,
        private updateService: UpdateService,
        private router: Router) { }

    products: any[] = []
    show = ''

    showAddPackage() {
        this.show = 'AddPackage'
    }

    showAddExcursion() {
        this.show = 'AddExcursion'
    }

    showAddBooking() {
        this.show = 'AddBooking'
    }

    showAddFacilities() {
        this.show = 'AddFacilities'
    }

    showNothing() {
        this.show = ''
    }


    listPackages() {
        this.packageService.listPackages().subscribe((data) => (this.products = data))
        this.show = 'package'
    }

    listFacility() {
        this.facilityService.listFacility().subscribe((data) => (this.products = data))
        this.show = 'facility'
    }

    listExcursion() {   // Also Extended Excursion
        this.excursionService.listExcursion().subscribe((data) => {
            this.products = data
            this.show = 'excursion'
        })
        this.extendedexcursionService.listExcursion().subscribe((data) => {
            this.products = this.products.concat(data)
            this.show = 'excursion'
        })
    }

    listExtendedExcursion() {
        this.extendedexcursionService.listExcursion().subscribe((data) => {
            this.products = this.products.concat(data)
            this.show = 'excursion'
        })
    }

    deleteFacility(facilityID: number) {
        this.facilityService.deleteFacility(facilityID).subscribe(() => { this.listFacility() })
        this.show = 'facility'
    }

    deleteExcursion(id: number, numberOfDays: number) { // Also Extended Excursion
        if (numberOfDays < 2 || numberOfDays === undefined) {
            this.excursionService.deleteExcursion(id).subscribe(() => this.listExcursion())
        }
        else {
            this.extendedexcursionService.deleteExcursion(id).subscribe(() => this.listExcursion())
            console.log('ExtendedExcursion');
            console.log(numberOfDays);
        }

    }

    deletePackages(id: number) {
        this.packageService.deletePackage(id).subscribe(() => this.listPackages())
    }

    createFacility() {
        let post = {
            name: (document.getElementById('Nombre') as HTMLInputElement).value
        }

        this.facilityService.createFacility(post).subscribe({
            next: (response) => { }
        })
        this.showNothing()
    }

    createExcursion() { // Also Extended Excursion
        let post = {
            name: (document.getElementById('Nombre') as HTMLInputElement).value,
            capacity: parseInt((document.getElementById('Capacity') as HTMLInputElement).value),
            price: parseInt((document.getElementById('Price') as HTMLInputElement).value),
            arrivalDate: new Date((document.getElementById('arrivalDate') as HTMLInputElement).value),
            departureDate: new Date((document.getElementById('departureDate') as HTMLInputElement).value),
            arrivalPlace: (document.getElementById('arrivalPlace') as HTMLInputElement).value,
            departurePlace: (document.getElementById('departurePlace') as HTMLInputElement).value,
            guia: (document.getElementById('Guia') as HTMLInputElement).value,
            agencyID: 1,
            numberOfDays: 0
        }

        let differenceInTime = post.departureDate.getTime() - post.arrivalDate.getTime();
        let differenceInDays = differenceInTime / (1000 * 3600 * 24);

        if (differenceInDays < 2) {
            this.excursionService.createExcursion(post).subscribe({
                next: (response) => { this.showNothing() }
            })
        } else {
            post.numberOfDays = differenceInDays
            this.extendedexcursionService.createExcursion(post).subscribe({
                next: (response) => { this.showNothing() }
            })
        }
    }

    createPackage() {
        let post = {
            description: (document.getElementById('Description') as HTMLInputElement).value,
            price: parseInt((document.getElementById('Price') as HTMLInputElement).value),
            capacity: parseInt((document.getElementById('Capacity') as HTMLInputElement).value),
            duration: parseInt((document.getElementById('Duration') as HTMLInputElement).value),
            startDate: new Date((document.getElementById('StartDate') as HTMLInputElement).value),
            endDate: new Date((document.getElementById('EndDate') as HTMLInputElement).value),
            agencyID: 1,
            facilityDtos: []
        }

        this.packageService.createPackagePost(post).subscribe({
            next: (response) => { this.showNothing() }
        })
    }

    updateFacility(id: number, name: string) {
        this.updateService.idFacility = id
        this.updateService.nameFacility = name
        this.updateService.typeService = 'AddFacilities'
        this.router.navigate(['../updates'])
    }

    updateExcursion(id: number, name: string, capacity: number, price: number, arrivalDate: Date, departureDate: Date, arrivalPlace: string, departurePlace: string, guia: string, agencyID: number) {
        this.updateService.idExcursion = id
        this.updateService.nameExcursion = name
        this.updateService.capacityExcursion = capacity
        this.updateService.priceExcursion = price
        this.updateService.arrivalDateExcursion = arrivalDate
        this.updateService.departureDateExcursion = departureDate
        this.updateService.arrivalPlaceExcursion = arrivalPlace
        this.updateService.departurePlaceExcursion = departurePlace
        this.updateService.guiaExcursion = guia
        this.updateService.agencyIDExcursion = agencyID
        this.updateService.typeService = 'AddExcursion'
        this.router.navigate(['../updates'])
    }

    updatePackage(id:number, description:string, price:number, capacity:number, duration:number, startDate:Date, endDate:Date, agencyID:number, dto:any) {
        this.updateService.idPackage = id
        this.updateService.descriptionPackage = description
        this.updateService.pricePackage = price
        this.updateService.capacityPackage = capacity
        this.updateService.durationPackage = duration
        this.updateService.startDatePackage = startDate
        this.updateService.endDatePackage = endDate
        this.updateService.agencyIDPackage = agencyID
        this.updateService.facilityDtosPackage = dto
        this.updateService.typeService = 'AddPackage'
        this.router.navigate(['../updates'])
    }
}
