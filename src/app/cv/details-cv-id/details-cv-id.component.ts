import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-details-cv-id',
  templateUrl: './details-cv-id.component.html',
  styleUrls: ['./details-cv-id.component.css']
})
export class DetailsCvIdComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.findPersonneById(params['id']).subscribe(
          (personne) => this.personne = personne,
          (error) => {
            const link = ['cv'];
            this.router.navigate(link);
          }
        );
      }
    );
  }
  deletePersonne() {}
  updatePersonne() {}
}
