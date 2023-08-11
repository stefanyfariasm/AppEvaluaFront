import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TipoBebidaComponent } from './tipo-bebida/tipo-bebida.component';
import { EstilosComponent } from './estilos/estilos.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { FallasVistaComponent } from './fallas-vista/fallas-vista.component';

const routes: Routes = [
  {path:"**", redirectTo:"principal"},
  {path:"", component:PrincipalComponent},
  {path:"tipoBebida", component:TipoBebidaComponent},
  {path:"estilos",component:EstilosComponent},
  {path:"barra", component: BarraSuperiorComponent},
  {path:"evaluacion", component: EvaluacionComponent},
  {path:"radar-chart", component: RadarChartComponent},
  {path:"fallas", component: FallasVistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
