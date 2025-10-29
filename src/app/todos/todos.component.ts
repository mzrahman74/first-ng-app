import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItem = signal<Array<Todo>>([]);
  ngOnInit() {
    console.log(this.todoService.todoItems);
    this.todoItem.set(this.todoService.todoItems);
  }
}
