import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {name: 'Neeraj', email: 'a@b.com', password: '1234', role: 'admin'},
    {name: 'Raman', email: 'r@m.com', password: 'abcd', role: 'user'},
    {name: 'Sachin', email: 's@t.com', password: 'pqrst', role: 'admin'},
 
  ];
  authenticated: User = null;
  constructor() {

   }
  
  findUser(user:User) : boolean {
    for( let i in this.users)
       {
        if (user.email === this.users[i].email && user.password === this.users[i].password)
           {
             this.authenticated = this.users[i];
             return true;
           }
       }
    return false;   
  }
}
