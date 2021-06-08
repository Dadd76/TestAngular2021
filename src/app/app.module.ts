import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CvComponent } from './cvTec/cv/cv.component';
import { ListCvComponent } from './cvTec/list-cv/list-cv.component';
import { ItemCvComponent } from './cvTec/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTec/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ForComponent } from './directive/for/for.component';
import { FormHeroComponent } from './heroes/form-hero/form-hero.component';
import { HeroWithServiceComponent } from './heroes/hero-service/hero-service.component';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here
import { MessageComponent } from './heroes/message/message.component';
import { ClassComponent } from './directive/ngClass/class.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ForComponent,
    FormHeroComponent,
    MessageComponent,
    HeroWithServiceComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
