import { Hotel, LodgingOffer } from './../Services/Models/listAgency.interface';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HotelService } from '../Services/hotel.service';
import { MovHotelService } from '../Services/MovimientoDatos/mov-hotel.service'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-hotel-offers',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './hotel-offers.component.html',
    styleUrl: './hotel-offers.component.css'
})
export class HotelOffersComponent implements OnInit {

    constructor(private hotelService: HotelService,
        private movHotelService: MovHotelService,
        private router: Router) { }

    ngOnInit(): void {
        this.listHotels()
    }
    products: Hotel[] = []
    httpClient = inject(HttpClient)
    listHotels() {
        this.httpClient.get<Hotel[]>('http://localhost:5094/api/Hotel/list').subscribe((data) => {
            this.products = data
        })
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
