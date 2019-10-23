import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Todo} from '../Model/todo';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    const link = 'https://jsonplaceholder.typicode.com/todos';
    const link2 = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get(link).pipe(
      map((todo) => new Todo(todo[0].id, todo[0].title)
      )
    ).subscribe(
      (data) => console.log(data)
    );
    this.http.post(link,
      {
        title: 'foo',
        body: 'bar',
        userId: 1
      }).subscribe(
      (data) => console.log(data)
    );
  }

}
