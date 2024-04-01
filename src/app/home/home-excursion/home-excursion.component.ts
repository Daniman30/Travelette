import { MovExcursionService } from './../../Services/MovimientoDatos/mov-excursion.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ExcursionService } from '../../Services/excursion.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-excursion',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './home-excursion.component.html',
    styleUrl: './home-excursion.component.css'
})
export class HomeExcursionComponent implements OnInit {

    constructor(private excursionService: ExcursionService,
        private movExcursionService: MovExcursionService,
        private router: Router) { }

    products: any[] = []

    ngOnInit(): void {
        this.excursionService.listExcursion().subscribe((data) => (this.products = data))
    }

    ViewExcursion(id:number, name:string, capacity:number, price:number, departurePlace:string, arrivalPlace:string, departureDate:Date, arrivalDate:Date, guia:string, agencyID:number) {
        this.movExcursionService.MovExcursion.id = id
        this.movExcursionService.MovExcursion.name = name
        this.movExcursionService.MovExcursion.capacity = capacity
        this.movExcursionService.MovExcursion.price = price
        this.movExcursionService.MovExcursion.departurePlace = departurePlace
        this.movExcursionService.MovExcursion.arrivalPlace = arrivalPlace
        this.movExcursionService.MovExcursion.departureDate = departureDate
        this.movExcursionService.MovExcursion.arrivalDate = arrivalDate
        this.movExcursionService.MovExcursion.guia = guia
        this.movExcursionService.MovExcursion.agencyID = agencyID
        this.router.navigate(['../excursion/booking'])
    }
}
