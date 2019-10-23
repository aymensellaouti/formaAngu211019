import { Injectable } from '@angular/core';
import {Personne} from '../../Model/personne';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_LINK = 'http://localhost:3000/api/personnes';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'aymen',
        'sellaouti', 37, 'as.jpg', 777777, 'teacher' ),
      new Personne(2, 'ahmed',
        'mohamed', 27, 'zizou.jpeg', 11111, 'coach' ),
      new Personne(3, 'Ammar',
        'ali', 27, '       ', 11111, '404' ),
    ];
  }
  getFakePersonnes() {
    return this.personnes;
  }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  findPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + `/${id}`);
  }
  addPersonne(personne: Personne): Observable<Personne> {
    // personne.id = this.personnes[this.personnes.length - 1].id + 1;
    // this.personnes.push(personne);
    const token = localStorage.getItem('token');
    // const headers = new HttpHeaders().set(
    //   'authorization', token
    // );
    return this.http.post<Personne>(API_LINK, personne/*, {headers}*/);
  }
}
