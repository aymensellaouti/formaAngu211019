import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../../Services/logger.service';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  allume = true;
  constructor(
    private loggerService: LoggerService
  ) { }

  ngOnInit() {
    this.loggerService.info('Votre lampe est allumé');
  }
  allumeEteindre() {
    this.allume = !this.allume;
  }

}
