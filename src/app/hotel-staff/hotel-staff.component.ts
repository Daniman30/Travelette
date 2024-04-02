import { HotelOffersService } from '../Services/hotel-offers.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HotelService } from '../Services/hotel.service';
import { UpdateService } from '../Services/MovimientoDatos/update.service';

@Component({
    selector: 'app-hotel-staff',
    standalone: true,
    imports: [RouterModule, CommonModule, RouterOutlet],
    templateUrl: './hotel-staff.component.html',
    styleUrl: './hotel-staff.component.css'
})
export class HotelStaffComponent implements OnInit {

    constructor(private hotelOffersService: HotelOffersService,
        private hotelService: HotelService,
        private updateService: UpdateService,
        private router: Router) { }
    NombreHotel = "Selecciona un Hotel"

    offers: any[] = []
    hotels: any[] = []

    ngOnInit(): void {
        this.listHotel();
        this.listHotelOffers();
    }

    listHotelOffers() {
        this.hotelOffersService.listHotelOffers().subscribe((data) => (this.offers = data.items))
    }

    createHotelOffers(idHotel: number) {
        let post = {
            hotelId: idHotel,
            description: (document.getElementById('Descripcion') as HTMLInputElement).value,
            price: parseInt((document.getElementById('Precio') as HTMLInputElement).value)
        }
        this.hotelOffersService.createHotelOfferPost(post).subscribe({
            next: (response) => { this.listHotelOffers() }
        })
    }

    listHotel() {
        this.hotelService.listHotels().subscribe((data) => (this.hotels = data.items))
    }

    DeleteHotelOffer(id: number) {
        this.hotelOffersService.deleteHotelOffer(id).subscribe(() => { this.listHotel() })
    }

    updateHotelOffer(id: number, hotelId: number, description: string, price: number) {
        this.updateService.idOffers = id
        this.updateService.hotelIdOffers = hotelId
        this.updateService.descriptionOffers = description
        this.updateService.priceOffers = price
        this.updateService.typeService = 'addOffer'
        this.router.navigate(['../updates'])
    }
}
