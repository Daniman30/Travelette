import { Component } from '@angular/core';
import { AgencyService } from '../Services/agency.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-updates',
    standalone: true,
    imports: [],
    templateUrl: './updates.component.html',
    styleUrl: './updates.component.css'
})
export class UpdatesComponent {

    constructor(private agencyService: AgencyService,
        private router: Router) {}

    updateAgency(id: number) {
        let post = {
            name: (document.getElementById('Nombre') as HTMLInputElement).value,
            address: (document.getElementById('Direccion') as HTMLInputElement).value,
            fax: (document.getElementById('Fax') as HTMLInputElement).value,
            electronicAddress: (document.getElementById('Email') as HTMLInputElement).value,
        }

        this.agencyService.updateAgency(id, post).subscribe({
            next: (response) => { this.router.navigate(['../admin']) }
        })
    }

    closeBtn() {
        this.router.navigate(['../admin'])
    }

}
