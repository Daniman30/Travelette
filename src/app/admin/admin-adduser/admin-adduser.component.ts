import { Component, ElementRef } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'
import { RegisterService } from '../../Services/register/register.service';
import { IdService } from '../../Services/MovimientoDatos/IdService/id.service';
import { SignupComponent } from '../../signup/signup.component';

@Component({
  selector: 'app-admin-adduser',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent, RouterModule],
  templateUrl: './admin-adduser.component.html',
  styleUrl: './admin-adduser.component.css'
})
export class AdminAdduserComponent {
  constructor(private registerService: RegisterService,
    private router: Router,
    private el: ElementRef,
    private idService: IdService) { }

  registerPost() {
    const password = document.getElementById('password') as HTMLInputElement
    const passwordError = this.el.nativeElement.querySelector('#passwordError');
    const repeatPassword = (document.getElementById('Rpassword') as HTMLInputElement)

    let post = {
      userName: (document.getElementById('userName') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      nacionality: (document.getElementById('nacionality') as HTMLInputElement).value,
      password: password.value,
      role: (document.getElementById('userType') as HTMLInputElement).value
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
      this.registerService.registerPost(post).subscribe({
        next: (response) => { }
      })
      this.router.navigate(['../admin']);
    }

  }
  dontSeePath = '../../assets/eye-password-hide-svgrepo-com.svg'
  seePath = '../../assets/eye-password-show-svgrepo-com.svg'
  imgPath = this.seePath

  showPassword: boolean = false
  see() {

    var passwordInput = document.getElementById("password") as HTMLInputElement;
    if (passwordInput){
      this.showPassword = !this.showPassword
      if (passwordInput.type === "password") {
        this.imgPath = this.dontSeePath
      } else {
        this.imgPath = this.seePath
      }
    }
  }
}
