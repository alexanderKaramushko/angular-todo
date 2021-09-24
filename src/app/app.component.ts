import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-todo';

  todoName = new FormControl('');

  constructor(public appService: AppService) {}

  createTodo(): void {
    this.appService.createTodo(this.todoName.value);
    this.todoName.setValue('');
  }

  toggleTodoDone(id: number): void {
    this.appService.toggleTodoDone(id);
  }

  deleteTodo(id: number): void {
    this.appService.deleteTodo(id);
  }
}
