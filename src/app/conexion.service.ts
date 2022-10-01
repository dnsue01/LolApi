import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http:HttpClient) { }




  recuperarTodos(){
    return this.http.get("/lol/spectator/v4/featured-games?api_key=RGAPI-6fd08ac5-287d-4974-9732-4b67ba38a7cb")
  }



  
}
