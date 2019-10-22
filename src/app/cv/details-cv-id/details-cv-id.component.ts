import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-cv-id',
  templateUrl: './details-cv-id.component.html',
  styleUrls: ['./details-cv-id.component.css']
})
export class DetailsCvIdComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
