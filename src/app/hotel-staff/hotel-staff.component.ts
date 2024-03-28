import { DeleteHotelOffersService } from './../Services/deleteHotelOffers/delete-hotel-offers.service';
import { CreateHotelOffersService } from './../Services/createHotelOffers/create-hotel-offers.service';
import { ListHotelOffersService } from './../Services/listHotelOffers/list-hotel-offers.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ListHotelService } from '../Services/listHotel/list-hotel.service';
import { DeleteHotelService } from '../Services/deleteHotel/delete-hotel.service';

@Component({
  selector: 'app-hotel-staff',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hotel-staff.component.html',
  styleUrl: './hotel-staff.component.css'
})
export class HotelStaffComponent implements OnInit{

  constructor(private listHotelOffersService: ListHotelOffersService,
              private createHotelOffersService: CreateHotelOffersService,
              private listHotelService: ListHotelService,
              private deleteHotelService: DeleteHotelService,
              private deleteHotelOffersService: DeleteHotelOffersService,
              private router: Router) {}
  NombreHotel = "Selecciona un Hotel"

  products:any[] = []
  products2:any[] = []

  ngOnInit(): void {
    this.listHotel();
    this.listHotelOffers();
  }

  listHotelOffers(){
    this.listHotelOffersService.listHotelOffers().subscribe((data) => (this.products = data))
  }

  createHotelOffers(idHotel: number){
    let post = {
      hotelId: idHotel,
      description: (document.getElementById('Descripcion') as HTMLInputElement).value,
      price: parseInt((document.getElementById('Precio') as HTMLInputElement).value)
    }
    this.createHotelOffersService.createHotelOfferPost(post).subscribe({
      next: (response) => {this.listHotelOffers()}
    })
  }

  listHotel(){
    this.listHotelService.listHotels().subscribe((data) => (this.products2 = data))
  }

  DeleteHotelOffer(id: number){
    this.deleteHotelOffersService.deleteHotelOffer(id).subscribe(() => {this.listHotel()})
  }
}
