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
import { UserdataComponent } from './userdata/userdata.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';

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
  },
  {
    path:"userdata",
    component:UserdataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"quotes",
    component:QuotesComponent
  }

]



@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    PublicDataComponent,
    PublicApiComponent,
    UserinfoComponent,
    ProductsComponent,
    UserdataComponent,
    TodoComponent,
    QuotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
