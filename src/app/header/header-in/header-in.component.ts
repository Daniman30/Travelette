import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { SignupComponent } from '../../signup/signup.component';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-header-in',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent, RouterModule],
  templateUrl: './header-in.component.html',
  styleUrl: './header-in.component.css'
})
export class HeaderInComponent {

}
