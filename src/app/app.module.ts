import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { PublicApiComponent } from './public-api/public-api.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductsComponent } from './products/products.component';

const myRoute=[
  {
    path:"",
    component:PassengerDataComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"publicapi",
    component:PublicApiComponent
  },
  {
    path:"publicdata",
    component:PublicDataComponent
  },
  {
    path:"userinfo",
    component:UserinfoComponent
  }

]



@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    PublicDataComponent,
    PublicApiComponent,
    UserinfoComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
