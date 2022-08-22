import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NightComponent} from "./components/night/night.component";
import {PicturesComponent} from "./components/pictures/pictures.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {ProtectionComponent} from "./components/protection/protection.component";

const routes: Routes = [
  { path: 'night', component: NightComponent},
  { path: 'pictures', component: PicturesComponent},
  { path: '', redirectTo: '/pictures', pathMatch: 'full' },
  { path: 'impressum', component: ImpressumComponent},
  { path: 'data_protection', component: ProtectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
