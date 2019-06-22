import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  constructor(private auth: AuthService,
    private router: Router) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    console.log('Following user is trying to login',this.user);
    if(this.auth.findUser(this.user))
    {
     
      if(this.auth.authenticated.role === 'admin')
        this.router.navigate(['admin']);
      else
        this.router.navigate(['user']);
    }
    else
    {
      console.log("Invalid credentials");
    }
  }
}
