import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutton',
  templateUrl: './boutton.component.html',
  styleUrls: ['./boutton.component.css']
})
export class BouttonComponent implements OnInit {

  isHidden = false;
  message = 'Cacher';
  constructor() { }

  ngOnInit() {
  }
  showHide() {
    this.isHidden = ! this.isHidden;
    (this.message === 'Cacher') ? this.message = 'Afficher' : this.message = 'Cacher';
  }

}
