import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ExcursionComponent } from './excursion/excursion.component';
import { HotelOffersComponent } from './hotel-offers/hotel-offers.component';
import { HotelOfferBookingComponent } from './hotel-offer-booking/hotel-offer-booking.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'excursion', component: ExcursionComponent },
    { path: 'hotel', component: HotelOffersComponent},
    { path: 'hotel/offers', component: HotelOfferBookingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }

