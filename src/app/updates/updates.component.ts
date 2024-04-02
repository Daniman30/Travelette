import { PackageService } from './../Services/package.service';
import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../Services/agency.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UpdateService } from '../Services/MovimientoDatos/update.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FacilityService } from '../Services/facility.service';
import { HotelService } from '../Services/hotel.service';
import { ExcursionService } from '../Services/excursion.service';
import { HotelOffersService } from '../Services/hotel-offers.service';

@Component({
    selector: 'app-updates',
    standalone: true,
    imports: [FormsModule, RouterModule, RouterOutlet, CommonModule],
    templateUrl: './updates.component.html',
    styleUrl: './updates.component.css'
})
export class UpdatesComponent implements OnInit {

    currentdata = this.updateService.typeService

    constructor(private agencyService: AgencyService,
        private router: Router,
        private updateService: UpdateService,
        private facilityService: FacilityService,
        private hotelService: HotelService,
        private excursionService: ExcursionService,
        private hotelOffersService: HotelOffersService,
        private packageService: PackageService) {}

    ngOnInit(): void {
    }

    id: number = this.updateService.id 
    name: string = this.updateService.name 
    address: string = this.updateService.address 
    fax: string = this.updateService.fax 
    email: string = this.updateService.email 

    idFacility: number = this.updateService.idFacility
    nameFacility: string = this.updateService.nameFacility

    idHotel: number = this.updateService.idHotel
    nameHotel: string = this.updateService.nameHotel
    categoryHotel: string = this.updateService.categoryHotel
    addressHotel: string = this.updateService.addressHotel

    idExcursion: number = this.updateService.idExcursion
    nameExcursion: string = this.updateService.nameExcursion
    capacityExcursion: number = this.updateService.capacityExcursion
    priceExcursion: number = this.updateService.priceExcursion
    arrivalDateExcursion: Date = this.updateService.arrivalDateExcursion
    departureDateExcursion: Date = this.updateService.departureDateExcursion
    arrivalPlaceExcursion: string = this.updateService.arrivalPlaceExcursion
    departurePlaceExcursion: string = this.updateService.departurePlaceExcursion
    guiaExcursion: string = this.updateService.guiaExcursion
    agencyIDExcursion: number = this.updateService.agencyIDExcursion

    idOffers: number = this.updateService.idOffers
    hotelIdOffers: number = this.updateService.hotelIdOffers
    descriptionOffers: string = this.updateService.descriptionOffers
    priceOffers: number = this.updateService.priceOffers

    idPackage: number = this.updateService.idPackage
    descriptionPackage: string = this.updateService.descriptionPackage
    pricePackage: number = this.updateService.pricePackage
    capacityPackage: number = this.updateService.capacityPackage
    durationPackage: number = this.updateService.durationPackage
    startDatePackage: Date = this.updateService.startDatePackage
    endDatePackage: Date = this.updateService.endDatePackage
    agencyIDPackage: number = this.updateService.agencyIDPackage
    facilityDtosPackage: any = this.updateService.facilityDtosPackage

    updateAgency() {
        let post = {
            id: this.id,
            name: (document.getElementById('Nombre') as HTMLInputElement).value,
            address: (document.getElementById('Direccion') as HTMLInputElement).value,
            fax: (document.getElementById('Fax') as HTMLInputElement).value,
            electronicAddress: (document.getElementById('Email') as HTMLInputElement).value,
        }

        this.agencyService.updateAgency(post).subscribe({
            next: (response) => { this.router.navigate(['../admin']) }
        })
    }

    updateFacility() {
        let post = {
            id: this.idFacility,
            name: (document.getElementById('facility') as HTMLInputElement).value,
        }

        this.facilityService.updateFacility(post).subscribe({
            next: (res) => { this.router.navigate(['../marketing'])}
        })
    }

    updateHotel() {
        let post = {
            id: this.idHotel,
            name: (document.getElementById('nameHotel') as HTMLInputElement).value,
            category: (document.getElementById('categoryHotel') as HTMLInputElement).value,
            address: (document.getElementById('addressHotel') as HTMLInputElement).value
        }

        this.hotelService.updateHotel(post).subscribe({
            next: (res) => { this.router.navigate(['../admin']) }
        })
    }

    updateExcursion() {
        let post = {
            id: this.idExcursion,
            name: (document.getElementById('NombreExc') as HTMLInputElement).value, 
            capacity: parseInt((document.getElementById('CapacityExc') as HTMLInputElement).value), 
            price: parseInt((document.getElementById('PriceExc') as HTMLInputElement).value), 
            arrivalDate: new Date((document.getElementById('arrivalDateExc') as HTMLInputElement).value), 
            departureDate: new Date((document.getElementById('departureDateExc') as HTMLInputElement).value), 
            arrivalPlace: (document.getElementById('arrivalPlaceExc') as HTMLInputElement).value, 
            departurePlace: (document.getElementById('departurePlaceExc') as HTMLInputElement).value, 
            guia: (document.getElementById('GuiaExc') as HTMLInputElement).value, 
            agencyID: 2, 
        }

        this.excursionService.updateExcursion(post).subscribe({
            next: (res) => { this.router.navigate(['../marketing']) }
        })
    }

    updateOffer() {
        let post = {
            id: this.idOffers,
            hotelId: this.hotelIdOffers,
            description: (document.getElementById('descriptionOffer') as HTMLInputElement).value,
            price: parseInt((document.getElementById('priceOffer') as HTMLInputElement).value)
        }


        this.hotelOffersService.updateHotelOffer(post).subscribe({
            next: (res) => { this.router.navigate(['../staff']) }
        })
    }

    updatePackage() {
        let post = {
            id: this.idPackage,
            description: (document.getElementById('descriptionPackage') as HTMLTextAreaElement).value,
            price: parseInt((document.getElementById('pricePackage') as HTMLInputElement).value),
            capacity: parseInt((document.getElementById('capacityPackage') as HTMLInputElement).value),
            duration: parseInt((document.getElementById('durationPackage') as HTMLInputElement).value),
            startDate: new Date((document.getElementById('startDatePackage') as HTMLInputElement).value),
            endDate: new Date((document.getElementById('endDatePackage') as HTMLInputElement).value),
            agencyID: this.agencyIDPackage | 2,
            facilityDtos: [{facilityId: 0}]
        }

        this.packageService.updatePackage(post).subscribe({
            next: (res) => { this.router.navigate(['../marketing']) }
        })
    }

    closeBtnA() {
        this.router.navigate(['../admin'])
    }

    closeBtnM() {
        this.router.navigate(['../marketing'])
    }

    closeBtnS() {
        this.router.navigate(['../staff'])
    }
}
