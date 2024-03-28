import { DeleteFacilityService } from './../Services/deleteFacility/delete-facility.service';
import { ListFacilityService } from './../Services/listFacility/list-facility.service';
import { CreateFacilityService } from './../Services/createFacility/create-facility.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {

  constructor(private createFacilityService: CreateFacilityService,
              private listFacilityService: ListFacilityService,
              private deleteFacilityService: DeleteFacilityService) {}

  products: any[] = []
  show = ''

  showAddPackage() {
    this.show = 'AddPackage'
  }

  showAddExcursion() {
    this.show = 'AddExcursion'
  }

  showAddBooking() {
    this.show = 'AddBooking'
  }

  showAddFacilities() {
    this.show = 'AddFacilities'
  }

  showNothing() {
    this.show = ''
  }

  listFacility(){
    this.listFacilityService.listFacility().subscribe((data) => (this.products = data))
    this.show = 'facility'
  }

  deleteFacility(facilityID: number) {
    this.deleteFacilityService.deleteFacility(facilityID).subscribe(() => {this.listFacility()})
    this.show = 'facility'
  }

  createFacility() {
    let post = {
      name: (document.getElementById('Nombre') as HTMLInputElement).value
    }

    this.createFacilityService.createFacility(post).subscribe({
      next: (response) => {}
    })
    this.showNothing()
  }
}
