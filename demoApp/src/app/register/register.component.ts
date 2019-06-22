import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  constructor(private auth: AuthService,
    private router: Router,
    private alertService: AlertService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  register() {
    console.log('Following user is trying to register',this.user);
    this.auth.registerUser(this.user).subscribe(result => {
      this.router.navigate(['/login']);
      this.alertService.success('Successfully registered.');
    });
  }

}
