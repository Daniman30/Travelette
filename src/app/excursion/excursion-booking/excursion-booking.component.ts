import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovExcursionService } from '../../Services/MovimientoDatos/mov-excursion.service';

@Component({
    selector: 'app-excursion-booking',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './excursion-booking.component.html',
    styleUrl: './excursion-booking.component.css'
})
export class ExcursionBookingComponent implements OnInit {

    constructor(public movExcursionService: MovExcursionService) {}
    ngOnInit(): void {
        
    }

    excursionName = this.movExcursionService.MovExcursion.name
    excursionCapacity = this.movExcursionService.MovExcursion.capacity
    excursionPrice = this.movExcursionService.MovExcursion.price
    excursionDeparturePlace = this.movExcursionService.MovExcursion.departurePlace
    excursionArrivalPlace = this.movExcursionService.MovExcursion.arrivalPlace
    excursionDepartureDate = new Date(this.movExcursionService.MovExcursion.departureDate)
    excursionArrivalDate = new Date(this.movExcursionService.MovExcursion.arrivalDate)
    excursionGuia = this.movExcursionService.MovExcursion.guia


}
