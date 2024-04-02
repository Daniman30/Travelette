import { MovHotelService } from '../../Services/MovimientoDatos/mov-hotel.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HotelService } from '../../Services/hotel.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-oferta',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './home-oferta.component.html',
    styleUrl: './home-oferta.component.css'
})
export class HomeOfertaComponent implements OnInit {

    constructor(private hotelService: HotelService,
        private movHotelService: MovHotelService,
        private router: Router) { }

    products: any[] = []

    ngOnInit(): void {
        this.hotelService.listHotels().subscribe((data) => (this.products = data.items))
    }

    ViewHotel(id: number, name: string, category: string, address: string, lodgingOffers: any) {
        this.movHotelService.MovHotel.id = id
        this.movHotelService.MovHotel.name = name
        this.movHotelService.MovHotel.category = category
        this.movHotelService.MovHotel.address = address
        this.movHotelService.MovHotel.lodgingOffers = lodgingOffers
        this.router.navigate(['../hotel/booking'])
    }
}
