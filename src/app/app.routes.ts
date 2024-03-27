import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ExcursionComponent } from './excursion/excursion.component';
import { HotelOffersComponent } from './hotel-offers/hotel-offers.component';
import { HotelOfferBookingComponent } from './hotel-offers/hotel-offer-booking/hotel-offer-booking.component';
import { AdminAddagencyComponent } from './admin/admin-addagency/admin-addagency.component';
import { AdminAddhotelComponent } from './admin/admin-addhotel/admin-addhotel.component';
import { HotelStaffComponent } from './hotel-staff/hotel-staff.component';

import { PackageComponent } from './package/package.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'excursion', component: ExcursionComponent },
    { path: 'hotel', component: HotelOffersComponent},
    { path: 'hotel/offers', component: HotelOfferBookingComponent},
    { path: 'admin/add-agency', component: AdminAddagencyComponent},
    { path: 'staff', component: HotelStaffComponent},
    { path: 'admin/add-hotel', component: AdminAddhotelComponent},
    {path: 'package', component: PackageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }

