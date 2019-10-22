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
    CvComponent
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
