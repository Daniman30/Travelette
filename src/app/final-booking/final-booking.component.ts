import { MovExcursionService } from './../Services/MovimientoDatos/mov-excursion.service';
import { BookExcursionService } from './../Services/book-excursion.service';
import { Router, RouterModule } from '@angular/router';
import { BookPackageService } from '../Services/book-package.service';
import { MovPackageService } from './../Services/MovimientoDatos/mov-package.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOfferService } from '../Services/book-offer.service';
import { BookingsService } from '../Services/MovimientoDatos/bookings.service';

@Component({
    selector: 'app-final-booking',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './final-booking.component.html',
    styleUrl: './final-booking.component.css'
})
export class FinalBookingComponent {
    constructor(private movPackageService: MovPackageService,
        private movExcursionService: MovExcursionService,
        private bookPackageService: BookPackageService,
        private bookExcursionService: BookExcursionService,
        private bookOfferService: BookOfferService,
        private bookingsService: BookingsService,
        private router: Router) { }

    currentdata = this.movPackageService.type
    // currentdata = this.bookingsService.typeBooking

    BookPackage() {
        let post = {
            packageId: this.movPackageService.idPackage,
            numberOfPeople: parseInt((document.getElementById('numberOfPeoplePackage') as HTMLInputElement).value),
            airlineCompany: (document.querySelector('select[name="Airlines"]') as HTMLSelectElement).value
        }
        this.bookPackageService.bookPackage(post).subscribe({
            next: (response) => { this.router.navigate(['../home']) }
        })
    }

    BookPackageAdmin() {
        let post = {
            packageId: this.movPackageService.idPackage,
            numberOfPeople: parseInt((document.getElementById('numberOfPeoplePackage') as HTMLInputElement).value),
            airlineCompany: (document.querySelector('select[name="Airlines"]') as HTMLSelectElement).value,
            userName: (document.getElementById('UserNamePackage') as HTMLInputElement).value,
            nacionality: parseInt((document.querySelector('select[name="NacionalityPackages"]') as HTMLSelectElement).value),
        }
        this.bookPackageService.bookPackageAdmin(post).subscribe({
            next: (response) => { this.router.navigate(['../home']) }
        })
    }

    BookExcursion() {
        let post = {
            excursionId: this.movExcursionService.MovExcursion.id,
            numberOfCompanions: parseInt((document.getElementById('numberOfPeopleExcursion') as HTMLInputElement).value)
        }
        this.bookExcursionService.bookExcursion(post).subscribe({
            next: (response) => { this.router.navigate(['../home']) }
        })
    }

    BookExcursionAdmin() {
        let post = {
            excursionId: this.movExcursionService.MovExcursion.id,
            numberOfCompanions: parseInt((document.getElementById('numberOfPeopleExcursionAdmin') as HTMLInputElement).value),
            userName: (document.getElementById('UserNameExcursion') as HTMLInputElement).value,
            nacionality: parseInt((document.querySelector('select[name="NacionalityExcursion"]') as HTMLSelectElement).value),
        }
        this.bookExcursionService.bookExcursionAdmin(post).subscribe({
            next: (response) => { this.router.navigate(['../home']) }
        })
    }

    BookOffer() {
        let post = {
            agencyOfferId: 0,
            arrivalDate: new Date((document.getElementById('arrivalDate') as HTMLInputElement).value),
            departureDate: new Date((document.getElementById('departureDate') as HTMLInputElement).value),
        }
        this.bookOfferService.bookOffer(post).subscribe({
            next: (res) => { this.router.navigate(['../home']) }
        })
    }

    BookOfferAdmin() {
        let post = {
            agencyOfferId: 0,
            arrivalDate: new Date((document.getElementById('arrivalDate') as HTMLInputElement).value),
            departureDate: new Date((document.getElementById('departureDate') as HTMLInputElement).value),
            userName: (document.getElementById('UserNameOfferAdmin') as HTMLInputElement).value,
            nacionality: parseInt((document.querySelector('select[name="NacionalityOfferAdmin"]') as HTMLSelectElement).value),
        }
        this.bookOfferService.bookOfferAdmin(post).subscribe({
            next: (res) => { this.router.navigate(['../home']) }
        })
    }
}
