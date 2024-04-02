import { MovPackageService } from './../../Services/MovimientoDatos/mov-package.service';
import { BookingsService } from './../../Services/MovimientoDatos/bookings.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MovExcursionService } from '../../Services/MovimientoDatos/mov-excursion.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-excursion-booking',
    standalone: true,
    imports: [],
    templateUrl: './excursion-booking.component.html',
    styleUrl: './excursion-booking.component.css'
})
export class ExcursionBookingComponent implements OnInit {

    constructor(public movExcursionService: MovExcursionService,
        private movPackageService: MovPackageService,
        private bookingsService: BookingsService,
        private router: Router) {}
    ngOnInit(): void {
        
    }
    excursionId = this.movExcursionService.MovExcursion.id
    excursionName = this.movExcursionService.MovExcursion.name
    excursionCapacity = this.movExcursionService.MovExcursion.capacity
    excursionPrice = this.movExcursionService.MovExcursion.price
    excursionDeparturePlace = this.movExcursionService.MovExcursion.departurePlace
    excursionArrivalPlace = this.movExcursionService.MovExcursion.arrivalPlace
    excursionDepartureDate = new Date(this.movExcursionService.MovExcursion.departureDate)
    excursionArrivalDate = new Date(this.movExcursionService.MovExcursion.arrivalDate)
    excursionGuia = this.movExcursionService.MovExcursion.guia

    BookingExcursion() {
        // this.bookingsService.typeBooking = 'bookExcursion'
        this.movPackageService.type = 'bookExcursion'
        this.router.navigate(['../../booking'])
    }
}

