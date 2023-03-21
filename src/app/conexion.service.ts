import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http:HttpClient) { }


  apikey = "RGAPI-b5ba94b9-07e6-4324-9eaa-9c575b7702e9";

  recuperarTodos(){
    
    return this.http.get("/lol/spectator/v4/featured-games?api_key="+this.apikey)
  }

  recuperarSummonerEncrip(summonerName:any){
    return this.http.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key="+this.apikey)
  }

  recuperarMaestria(championId:any,encryptedSummonerId:any){
    return this.http.get("https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+encryptedSummonerId+"/by-champion/"+championId+"?api_key="+this.apikey)
  }
  
}
