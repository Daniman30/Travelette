import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'
import { RegisterService } from '../Services/register/register.service';
import { every } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private registerService: RegisterService) { }

  registerPost() {
    event?.preventDefault();
    
    const password = document.getElementById('password') as HTMLInputElement
    const passwordError = document.getElementById('passwordError') as HTMLParagraphElement;
    const repeatPassword = (document.getElementById('Rpassword') as HTMLInputElement)

    let post = {
      userName: (document.getElementById('userName') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      nacionality: (document.getElementById('nacionality') as HTMLInputElement).value,
      password: password.value
    }

    const regexNumber = /\d/;
    const regexLowercase = /[a-z]/;
    if (!regexNumber.test(password.value)) {
      password.value == '';
      passwordError.textContent = 'Error: La contraseña debe contener al menos un número';
      password.classList.add('error'); //! Agrega una clase para estilos de error????
    }
    else if (!regexLowercase.test(password.value)) {
      password.value = '';
      passwordError.textContent = 'Error: La contraseña debe contener al menos una letra minúscula';
      password.classList.add('error'); //! Agrega una clase para estilos de error????
    }
    else if (repeatPassword.value != password.value) {

    }
    else
    {
      this.registerService.registerPost(post).subscribe({
        next: (response) => { console.log(JSON.parse); }
      })
    }
    
  }
}
