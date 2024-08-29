import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WomanComponent } from './woman/woman.component';
import { AccountComponent } from './account/account.component';
import { BackToSchoolComponent } from './back-to-school/back-to-school.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { FentyComponent } from './fenty/fenty.component';
import { FentyService } from './fenty/fenty.service';
import { ShippingComponent } from './shipping/shipping.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { SportComponent } from './sport/sport.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    WomanComponent,
    AccountComponent,
    BackToSchoolComponent,
    MenComponent,
    KidsComponent,
    FentyComponent,
    ShippingComponent,
    CollaborationsComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
