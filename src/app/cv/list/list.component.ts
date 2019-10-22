import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne';
import {EventHandlerVars} from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() { }
  @Output() sendPersonneToCv = new EventEmitter();

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'aymen',
        'sellaouti', 37, 'as.jpg', 777777, 'teacher' ),
      new Personne(2, 'ahmed',
        'mohamed', 27, 'zizou.jpeg', 11111, 'rien' ),
    ];
  }

  sendItem(personne: Personne) {
    this.sendPersonneToCv.emit(personne);
  }

}
