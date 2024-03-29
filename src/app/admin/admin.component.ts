import { DeleteHotelService } from './../Services/deleteHotel/delete-hotel.service';
import { Component } from '@angular/core';
import { ListAgencyService } from '../Services/listAgency/list-agency.service';
import { AdminAddagencyComponent } from './admin-addagency/admin-addagency.component';
import { AdminAddhotelComponent } from './admin-addhotel/admin-addhotel.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListHotelService } from '../Services/listHotel/list-hotel.service';
import { AuthService } from '../Services/auth/auth.service';
import { LoginService } from '../Services/login/login.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminComponent, RouterOutlet, AdminAddagencyComponent, AdminAddhotelComponent, RouterModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {

  constructor(private listAgencyService: ListAgencyService,
              private listHotelService: ListHotelService,
              private deleteHotelService: DeleteHotelService
              ) { }
  
  products: any[] = []
  products2: any[] = []
  
  public currentdata: any

  listAgency(){
    this.listAgencyService.listAgencies().subscribe((data2) => (this.products2 = data2))
    this.currentdata = "agency"
  }

  listHotel(){
    this.listHotelService.listHotels().subscribe((data) => (this.products = data))
    this.currentdata = "hotel"
  }

  deleteHotel(id: number){
    this.deleteHotelService.deleteHotel(id).subscribe(() => {this.listHotel()})
  }
}

