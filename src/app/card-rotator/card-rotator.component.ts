import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-rotator',
  templateUrl: './card-rotator.component.html',
  styleUrls: ['./card-rotator.component.css']
})
export class CardRotatorComponent implements OnInit {
  name = 'sellaouti';
  firstname = 'aymen';
  path = 'rotating_card_profile.png'
  constructor() { }

  ngOnInit() {
  }

}
