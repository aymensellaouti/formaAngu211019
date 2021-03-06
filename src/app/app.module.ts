import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BouttonComponent } from './boutton/boutton.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { CardRotatorComponent } from './card-rotator/card-rotator.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { CvComponent } from './cv/cv/cv.component';
import { NgStyleComponent } from './directive/ng-style/ng-style.component';
import { NgClassComponent } from './directive/ng-class/ng-class.component';
import { HighlightDirective } from './highlight.directive';
import { DefaultImagePipe } from './default-image.pipe';
import {LoggerService} from './Services/logger.service';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { RouteSimulatorComponent } from './route-simulator/route-simulator.component';
import { DetailsCvIdComponent } from './cv/details-cv-id/details-cv-id.component';
import { LoginComponent } from './login/login.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './guard/authGuard';
import {LoginInterceptorProvider} from './interceptors/login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    BouttonComponent,
    ColorComponent,
    CardRotatorComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    CvComponent,
    NgStyleComponent,
    NgClassComponent,
    HighlightDirective,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    RouteSimulatorComponent,
    DetailsCvIdComponent,
    LoginComponent,
    AddPersonneComponent,
    ObservableComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    LoginInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
