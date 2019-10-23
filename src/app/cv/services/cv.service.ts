import { Injectable } from '@angular/core';
import {Personne} from '../../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'aymen',
        'sellaouti', 37, 'as.jpg', 777777, 'teacher' ),
      new Personne(2, 'ahmed',
        'mohamed', 27, 'zizou.jpeg', 11111, 'coach' ),
      new Personne(3, 'Ammar',
        'ali', 27, '       ', 11111, '404' ),
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
  findPersonneById(id): Personne {
    const personne = this.personnes.find(
      (p) => {
        return (p.id === +id);
      }
    );
    return personne;
  }
  addPersonne(personne: Personne) {
    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);
  }
}
