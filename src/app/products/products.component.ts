import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  constructor(private api:ApiService){
    api.fetchProducts().subscribe(
      (response)=>{
        this.productdata=response;
      }
    )
  }

  productdata:any=[]
}


