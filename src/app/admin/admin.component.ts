import { CreateAgencyService } from './../Services/createAgency/create-agency.service';
import { HttpClient } from '@angular/common/http';
import { IApiCreateAgency, IApiListAgency } from '../Services/Models/listAgency.interface'; // Asegúrate de importar la interfaz
import { Component, Input, OnInit, inject } from '@angular/core';
import { ListAgencyService } from '../Services/listAgency/list-agency.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent implements OnInit {

  constructor(private createAgencyService: CreateAgencyService) {}

  createPostWithAngular() {

    let post = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value,
      fax: (document.getElementById('fax') as HTMLInputElement).value,
      electronicAddress: (document.getElementById('electronicAddress') as HTMLInputElement).value
    }

    this.createAgencyService.createPost(post).subscribe({
      next: (response) => {console.log(response);}
    })
  }
  
  private readonly _listAgencyService = inject(ListAgencyService)
  
  products: IApiListAgency[] = []


  ngOnInit(): void {
      this._listAgencyService.listAgencies().subscribe((data) => (this.products = data))
  }

  @Input({ required: true }) product?: IApiListAgency
  
  
}

