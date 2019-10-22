import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [new Todo('lundi', 'se lever')];
  constructor() { }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  loggerTodo() {
    console.log(this.todos);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index < 0) {
      alert('Todo innexistant');
    } else {
      this.todos.splice(index, 1);
    }
  }
}
