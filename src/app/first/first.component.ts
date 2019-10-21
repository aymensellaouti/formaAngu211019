import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
  <h1>First Component</h1>
    <p>Bonjour First</p>
  `,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
