import { HotelService } from '../Services/hotel.service';
import { Component, ElementRef } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user.service';
import { AgencyService } from '../Services/agency.service';
import { UpdateService } from '../Services/MovimientoDatos/update.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [AdminComponent, RouterOutlet, RouterModule, CommonModule],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css'
})

export class AdminComponent {

    constructor(private agencyService: AgencyService,
        private hotelService: HotelService,
        private userService: UserService,
        private el: ElementRef,
        private updateService: UpdateService,
        private router: Router,
        private http: HttpClient
    ) { }

    products: any[] = []
    products2: any[] = []

    public currentdata: any

    showNothing() {
        this.currentdata = ''
    }

    addAgency() {
        this.currentdata = 'addAgency'
    }

    addHotel() {
        this.currentdata = 'addHotel'
    }

    addUser() {
        this.currentdata = 'addUser'
    }

    listAgency() {
        this.agencyService.listAgencies().subscribe((data2) => (this.products2 = data2.items))
        this.currentdata = "agency"
    }

    listHotel() {
        this.hotelService.listHotels().subscribe((data) => (this.products = data.items))
        this.currentdata = "hotel"
    }

    listUser() {
        this.userService.listUsers().subscribe((data) => (this.products = data.items))
        this.currentdata = "user"
    }

    deleteHotel(id: number) {
        this.hotelService.deleteHotel(id).subscribe(() => { this.listHotel() })
    }

    deleteAgency(id: number) {
        this.agencyService.deleteAgency(id).subscribe(() => { this.listAgency() })
    }

    deleteUser(id: number) {

    }

    createAgencyPost() {
        let post = {
            name: (document.getElementById('Nombre') as HTMLInputElement).value,
            address: (document.getElementById('Direccion') as HTMLInputElement).value,
            fax: (document.getElementById('Fax') as HTMLInputElement).value,
            electronicAddress: (document.getElementById('Email') as HTMLInputElement).value,
        }

        this.agencyService.createAgencyPost(post).subscribe({
            next: (response) => { this.listAgency() }
        })
    }

    createHotelPost() {
        let post = {
            name: (document.getElementById('Nombre') as HTMLInputElement).value,
            category: (document.getElementById('Categoria') as HTMLInputElement).value,
            address: (document.getElementById('Direccion') as HTMLInputElement).value
        }

        this.hotelService.createHotelPost(post).subscribe({
            next: (response) => { this.listHotel() }
        })

    }

    countries: any[] = []

    func() {
        this.http.get<string[]>('http://localhost:5094/api/Nationality/list').subscribe(data => { this.countries = data })
    }

    ngOnInit(): void {
        this.func()
    }

    registerPost() {
        console.log('post');
        const password = document.getElementById('password') as HTMLInputElement
        const passwordError = this.el.nativeElement.querySelector('#passwordError');
        const repeatPassword = (document.getElementById('Rpassword') as HTMLInputElement)
        const nacionalitySelect = document.querySelector('select[name="nacionality"]') as HTMLSelectElement;

        let post = {
            userName: (document.getElementById('userName') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            // nacionality: (document.getElementById('nacionality') as HTMLInputElement).value,
            nacionality: parseInt(nacionalitySelect.value),
            password: password.value,
            role: (document.getElementById('userType') as HTMLInputElement).value
        }

        console.log(post);

        const regexNumber = /\d/;
        const regexLowercase = /[a-z]/;
        const regexUppercase = /[A-Z]/;
        const regexSpecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (password.value.length < 8) {
            passwordError.textContent = 'The password must contain at least 8 characters';
        }
        else if (repeatPassword.value != password.value) {
            passwordError.textContent = 'Password is different from Confirm Password';
        }
        else if (!regexNumber.test(password.value)) {
            passwordError.textContent = 'The password must contain at least one number';
        }
        else if (!regexLowercase.test(password.value)) {
            passwordError.textContent = 'The password must contain at least one lowercase letter';
        }
        else if (!regexUppercase.test(password.value)) {
            passwordError.textContent = 'The password must contain at least one uppercase letter';
        }
        else if (!regexSpecial.test(password.value)) {
            passwordError.textContent = 'The password must contain at least one special character';
        }
        else {
            this.userService.registerPost(post).subscribe({
                next: (response) => { this.listUser() }
            })
        }
    }

    dontSeePath = '../../assets/eye-password-hide-svgrepo-com.svg'
    seePath = '../../assets/eye-password-show-svgrepo-com.svg'
    imgPath = this.seePath

    showPassword: boolean = false
    see() {
        var passwordInput = document.getElementById("password") as HTMLInputElement;
        if (passwordInput) {
            this.showPassword = !this.showPassword
            if (passwordInput.type === "password") {
                this.imgPath = this.dontSeePath
            } else {
                this.imgPath = this.seePath
            }
        }
    }

    updateAgency(id: number, name: string, address: string, fax: string, email: string) {
        this.updateService.id = id
        this.updateService.name = name
        this.updateService.address = address
        this.updateService.fax = fax
        this.updateService.email = email
        this.updateService.typeService = 'addAgency'
        this.router.navigate(['../updates'])
    }

    updateHotel(id: number, name: string, category: string, address: string) {
        this.updateService.idHotel = id
        this.updateService.nameHotel = name
        this.updateService.categoryHotel = category
        this.updateService.addressHotel = address
        this.updateService.typeService = 'addHotel'
        this.router.navigate(['../updates'])
    }
}

