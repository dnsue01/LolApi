import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidaComponent } from './partida/partida.component';
const routes: Routes = [
  {"path":"lel",component:PartidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
