import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'
import { UserService } from '../Services/user.service';
import { IdService } from '../Services/MovimientoDatos/id.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [RouterOutlet, SignupComponent, RouterModule, CommonModule],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

    constructor(private userService: UserService,
        private router: Router,
        private el: ElementRef,
        private http: HttpClient,
        private idService: IdService) { }

    registerPost() {

        event?.preventDefault();

        const password = document.getElementById('password') as HTMLInputElement
        const passwordError = this.el.nativeElement.querySelector('#passwordError');
        const repeatPassword = (document.getElementById('Rpassword') as HTMLInputElement)
        const nacionalitySelect = document.querySelector('select[name="nacionality"]') as HTMLSelectElement;

        let post = {
            userName: (document.getElementById('userName') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            // nacionality: nacionalitySelect.value,
            nacionality: parseInt(nacionalitySelect.value),
            password: password.value,
            role: "Tourist"
        }

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
                next: (response) => {
                    this.idService.changeId(post.userName, response.toString());
                    if (localStorage.getItem('access_token')) {
                        this.router.navigate(['../home']);
                    }
                    else {
                        // Manejar el error de autenticación
                    }
                }
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

    countries: any[] = []

    func() {
        this.http.get<string[]>('http://localhost:5094/api/Nationality/list').subscribe(
            data => { this.countries = data })
    }

    ngOnInit(): void {
        this.func()
    }
}
