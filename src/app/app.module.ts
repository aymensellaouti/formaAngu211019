import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BouttonComponent } from './boutton/boutton.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { CardRotatorComponent } from './card-rotator/card-rotator.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    BouttonComponent,
    ColorComponent,
    CardRotatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
