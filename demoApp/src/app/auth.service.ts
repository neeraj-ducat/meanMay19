import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated: User = null;
  constructor(private http: HttpClient) {

   }
  
  findUser(user:User) : boolean {
       return true;
  }
  registerUser(user:User) : Observable<string> {
    return this.http.post<string>(environment.apiUrl,user);
}
}
