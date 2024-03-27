import { CreateAgencyService } from './../../Services/createAgency/create-agency.service';
import { AdminComponent } from '../admin.component';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-addagency',
  standalone: true,
  imports: [RouterModule, AdminComponent, AdminAddagencyComponent],
  templateUrl: './admin-addagency.component.html',
  styleUrl: './admin-addagency.component.css'
})
export class AdminAddagencyComponent {
  constructor(private createAgencyService: CreateAgencyService,
    private router: Router) {}

  createAgencyPost(){
    let post = {
      name: (document.getElementById('Nombre') as HTMLInputElement).value,
      address: (document.getElementById('Direccion') as HTMLInputElement).value,
      fax: (document.getElementById('Fax') as HTMLInputElement).value,
      electronicAddress: (document.getElementById('Email') as HTMLInputElement).value,
    }

    this.createAgencyService.createAgencyPost(post).subscribe({
      next: (response) => {

      }
    })
    this.router.navigate(['../admin'])
  }
}
