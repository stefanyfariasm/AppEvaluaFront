import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TipoBebidaComponent } from './tipo-bebida/tipo-bebida.component';
import { EstilosComponent } from './estilos/estilos.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

const routes: Routes = [
  {path:"**", redirectTo:"principal"},
  {path:"", component:PrincipalComponent},
  {path:"tipoBebida", component:TipoBebidaComponent},
  {path:"estilos",component:EstilosComponent},
  {path:"barra", component: BarraSuperiorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
