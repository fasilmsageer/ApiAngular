import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { PublicApiComponent } from './public-api/public-api.component';



@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    PublicDataComponent,
    PublicApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
