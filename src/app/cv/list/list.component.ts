import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor(
    private cvService: CvService
  ) { }
  @Output() sendPersonneToCv = new EventEmitter();

  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => this.personnes = personnes,
      (error) => {
        console.log(error);
        alert('Pbm with HTTP Connexion These data are Fake :\'');
        this.personnes = this.cvService.getFakePersonnes();
      }
    );
  }
  sendItem(personne: Personne) {
    this.sendPersonneToCv.emit(personne);
  }

}
