import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-data',
  templateUrl: './public-data.component.html',
  styleUrls: ['./public-data.component.css']
})
export class PublicDataComponent {

  constructor(private api:ApiService){
    api.fetchPublicdata().subscribe(
      (response)=>{
        this.public=response;
      }
    )
  }

  public:any=[]

}
