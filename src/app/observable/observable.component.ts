import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  observable: Observable<number>;
  imageObservable: Observable<string>;
  paths = [
    '404.png',
    'as.jpg',
    'cv.png',
    'default.png'
  ];
  data = 10;
  path = 'default.png';
  constructor() {
  }

  ngOnInit() {
     this.observable = new Observable(
      (observer) => {
        let i = 5;
        setInterval(() => {
          if (!i) {
            observer.complete();
          }
          observer.next(i--);
        }, 1000);
      });
     this.imageObservable = new Observable(
      (observer) => {
        let i = this.paths.length - 1;
        setInterval(() => {
          if (i < 0) {
            i = this.paths.length - 1;
          }
          observer.next(this.paths[i--]);
        }, 1000);
      });
     this.observable.subscribe(
      (val) => {
        this.data *= 2;
      },
      (erreur) => {
        console.log('subscriber 2', erreur);
      },
      () => {
        console.log('Fin :(');
      }
    );
     this.imageObservable.subscribe(
       (path) => this.path = path
     );
  }

}
