import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {DetailsCvIdComponent} from './cv/details-cv-id/details-cv-id.component';

const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'cv/:id/:name', component: DetailsCvIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
