import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { ToDo } from './todo.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Array to store todo tasks
  tasks: ToDo[];
 constructor(private todoService: TodoService,
  private spinner: NgxSpinnerService) {
   this.tasks = Array();
 }

  loadTasks() {
    this.spinner.show();
    let tasks:Observable<ToDo[]>  = this.todoService.loadTodos();
    console.log('Observable is received.');
    tasks.subscribe((result) => {
      console.log('Following result is received ',result);
      this.tasks = result;
      this.spinner.hide();
    });
  }
}
