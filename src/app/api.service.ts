import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchPassengerdata=()=>{
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }
  fetchProducts=()=>{
    return this.http.get("https://dummyjson.com/products")
  }
  fetchPublicapi=()=>{
    return this.http.get("https://api.publicapis.org/entries")
  }
  fetchPublicdata=()=>{
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }
  fetchUserdata=()=>{
    return this.http.get("https://dummyjson.com/users")
  }
  fetchUserinfo=()=>{
    return this.http.get("https://reqres.in/api/users?page=1")
  }
  fetchtodo=()=>{
    return this.http.get("https://dummyjson.com/todos")
  }
  fetchquotes=()=>{
    return this.http.get("https://dummyjson.com/quotes")
  }
}
