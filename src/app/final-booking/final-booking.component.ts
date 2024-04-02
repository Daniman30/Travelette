import { Router } from '@angular/router';
import { BookPackageService } from '../Services/book-package.service';
import { MovPackageService } from './../Services/MovimientoDatos/mov-package.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-final-booking',
    standalone: true,
    imports: [],
    templateUrl: './final-booking.component.html',
    styleUrl: './final-booking.component.css'
})
export class FinalBookingComponent {
    constructor(private movPackageService: MovPackageService,
        private bookPackageService: BookPackageService,
        private router: Router) { }

    BookPackage() {
        let post = {
            packageId: this.movPackageService.idPackage,
            numberOfPeople: parseInt((document.getElementById('numberOfPeoplePackage') as HTMLInputElement).value),
            airlineCompany: (document.querySelector('select[name="Airlines"]') as HTMLSelectElement).value
        }
        this.bookPackageService.bookPackage(post).subscribe({
            next: (response) => { this.router.navigate(['../home']) }
        })
    }
}

