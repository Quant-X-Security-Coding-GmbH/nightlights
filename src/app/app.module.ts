import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NightComponent } from './components/night/night.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { ProtectionComponent } from './components/protection/protection.component';



@NgModule({
  declarations: [
    AppComponent,
    NightComponent,
    PicturesComponent,
    ImpressumComponent,
    ProtectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
