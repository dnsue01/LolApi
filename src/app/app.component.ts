import { Component } from '@angular/core';
import { ConexionService } from './conexion.service';
import listadeJugadores from 'src/assets/json/personajes.json';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personajes: any = listadeJugadores;
  partida: any;

  sumonnerID: any;
  summoner: any;
  num: any = 0;
  team1:any;

  constructor(private conexion: ConexionService) { }

  ngOnInit() {
    this.recuperarTodos();
  }
  recuperarTodos() {
    this.conexion.recuperarTodos().subscribe((result: any) => {
      this.partida = result.gameList[0]
      
      for (let index = 0; index < this.partida.participants.length; index++) {
        
        if(index<=5){
          
        }
        
      }
         
    }
    );
  }

  recuperarSummonerEncrip(summoner: any) {

    this.conexion.recuperarSummonerEncrip(summoner).subscribe((result: any) => {
      summoner = result
    }
    );
    return summoner;
  }
  recuperarMaestria(summonerName: any, championid: any) {

    this.conexion.recuperarMaestria(championid, this.recuperarSummonerEncrip(summonerName).id).subscribe((result: any) => {
      console.log(result.championLevel);
    }

    );
  }
  contador() {
    this.num++;
    console.log(this.num);

  }

}
