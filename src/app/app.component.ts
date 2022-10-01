import { Component } from '@angular/core';
import { ConexionService } from './conexion.service';
import listadePostres from 'src/assets/json/postres.json';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Postres: any = listadePostres;
  partidas: any;

  constructor(private conexion: ConexionService) { }

  ngOnInit() {
    this.recuperarTodos();
  }
  recuperarTodos() {
    this.conexion.recuperarTodos().subscribe((result: any) => {
      this.partidas = result

    }
    );

  }




}
