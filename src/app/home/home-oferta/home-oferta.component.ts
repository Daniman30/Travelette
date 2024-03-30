import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ListHotelService } from '../../Services/listHotel/list-hotel.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-oferta',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './home-oferta.component.html',
    styleUrl: './home-oferta.component.css'
})
export class HomeOfertaComponent implements OnInit {

    constructor(private listHotelService: ListHotelService) { }

    products: any[] = []

    ngOnInit(): void {
        this.listHotelService.listHotels().subscribe((data) => (this.products = data))
    }


}
