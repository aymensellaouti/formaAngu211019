import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {DetailsCvIdComponent} from './cv/details-cv-id/details-cv-id.component';
import {LoginComponent} from './login/login.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';

const routes: Routes = [
  { path: 'cv',
    children: [
      {path: '', component: CvComponent},
      {path: 'add', component: AddPersonneComponent},
      {path: ':id', component: DetailsCvIdComponent},
    ]
  },
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
