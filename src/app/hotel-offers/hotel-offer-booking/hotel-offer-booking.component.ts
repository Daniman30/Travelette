import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovHotelService } from '../../Services/MovimientoDatos/mov-hotel.service';
import { HotelOffersService } from '../../Services/hotel-offers.service';
import { LodgingOffer } from '../../Services/Models/listAgency.interface';
import { MovPackageService } from '../../Services/MovimientoDatos/mov-package.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hotel-offer-booking',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hotel-offer-booking.component.html',
    styleUrl: './hotel-offer-booking.component.css'
})
export class HotelOfferBookingComponent implements OnInit {
    constructor(private movHotelService: MovHotelService,
        private movPackageService: MovPackageService,
        private router: Router) {}

    ngOnInit(): void {
        
    }

    hotelName = this.movHotelService.MovHotel.name
    hotelAddress = this.movHotelService.MovHotel.category
    hotelCategory = this.movHotelService.MovHotel.address
    hotelLodgingOffers = this.movHotelService.MovHotel.lodgingOffers

    products: LodgingOffer[] = this.hotelLodgingOffers

    BookOffer() {
        this.movPackageService.type = 'bookOffer'
        this.router.navigate(['../../booking'])
    }
}
