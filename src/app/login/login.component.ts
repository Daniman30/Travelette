import { LoginService } from './../Services/login/login.service';
import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private loginService: LoginService) {}

  loginPost() {
    let post = {
      userName: (document.getElementById('userName') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value
    }

    this.loginService.loginPost(post).subscribe({
      next: (response) => {console.log(response);}
    })
  }
}


