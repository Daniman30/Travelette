import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import {AdminAddhotelComponent} from  './admin-addhotel/admin-addhotel.component'
import { AdminAddagencyComponent } from './admin-addagency/admin-addagency.component';
import { HomeComponent } from './home/home.component';
import { HotelOffersComponent } from './hotel-offers/hotel-offers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    AdminAddhotelComponent,
    AdminAddagencyComponent,
    HomeComponent,
    HotelOffersComponent
  ]
})
export class AppComponent {
  title = 'Travelette'

  postData = {
    name: '',
    address: '',
    fax: '',
    electronicAddress: ''
  }
}