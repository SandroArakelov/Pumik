import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WomanComponent } from './woman/woman.component';
import { AccountComponent } from './account/account.component';
<<<<<<< Updated upstream
import { BackToSchoolComponent } from './back-to-school/back-to-school.component';
=======
import { MenComponent } from './men/men.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    WomanComponent,
    AccountComponent,
<<<<<<< Updated upstream
    BackToSchoolComponent
=======
    MenComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
