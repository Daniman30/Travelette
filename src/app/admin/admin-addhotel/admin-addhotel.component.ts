import { AdminComponent } from '../admin.component';
import { IdService } from './../../Services/MovimientoDatos/IdService/id.service';
import { CreateHotelService } from './../../Services/createHotel/create-hotel.service';
import { Component, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-addhotel',
  standalone: true,
  imports: [RouterModule, AdminAddhotelComponent, AdminComponent],
  templateUrl: './admin-addhotel.component.html',
  styleUrl: './admin-addhotel.component.css'
})
export class AdminAddhotelComponent {
  constructor(private createHotelService: CreateHotelService,
    private router: Router, 
    private el: ElementRef,
    private idService: IdService) {}
  
  createHotelPost(){
    let post = {
      name: (document.getElementById('Nombre') as HTMLInputElement).value,
      category: (document.getElementById('Categoria') as HTMLInputElement).value,
      address: (document.getElementById('Direccion') as HTMLInputElement).value
    }

    this.createHotelService.createHotelPost(post).subscribe({
      next: (response) => {

      }
    })
    this.router.navigate(['../admin'])
  }
}
