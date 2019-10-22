import { Component, OnInit } from '@angular/core';
import {TodoService} from '../Services/todo.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }
  handleSonMessage(message) {
    alert(message);
  }
  logTodo() {
    this.todoService.loggerTodo();
  }

}
