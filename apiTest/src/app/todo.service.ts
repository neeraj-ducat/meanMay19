import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './todo.model';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // Method to fetch ToDo tasks from the server
  loadTodos(): Observable<ToDo[]> {
    console.log("service method is invoked.");
     return this.http.get<ToDo[]>(apiUrl);
  }
}
