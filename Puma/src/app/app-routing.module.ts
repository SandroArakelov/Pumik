import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WomanComponent } from './woman/woman.component';
import { AccountComponent } from './account/account.component';
import { BackToSchoolComponent } from './back-to-school/back-to-school.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { FentyComponent } from './fenty/fenty.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SportComponent } from './sport/sport.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'woman', component: WomanComponent},
  {path: 'men', component: MenComponent},
  {path: 'account', component: AccountComponent},
  {path: 'back-to-school', component: BackToSchoolComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'fenty', component: FentyComponent},
  {path: 'collaborations', component: CollaborationsComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
