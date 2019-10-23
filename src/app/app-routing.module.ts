import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {DetailsCvIdComponent} from './cv/details-cv-id/details-cv-id.component';

const routes: Routes = [
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: ':id', component: DetailsCvIdComponent},
    ]
  },
  {path: 'todo', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
