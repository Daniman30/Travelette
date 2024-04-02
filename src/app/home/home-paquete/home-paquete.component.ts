import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackageService } from '../../Services/package.service';
import { IApiListPackage } from '../../Services/Models/listAgency.interface';

@Component({
    selector: 'app-home-paquete',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './home-paquete.component.html',
    styleUrl: './home-paquete.component.css'
})
export class HomePaqueteComponent implements OnInit {

    constructor(private packageService: PackageService) {}
    ngOnInit(): void {
        this.listPackages()
    }
    products: any[] = []

    listPackages() {
        this.packageService.listPackages().subscribe((data) => (this.products = data.items))
    }
}
