import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TipoBebidaComponent } from './tipo-bebida/tipo-bebida.component';

const routes: Routes = [
  {path:"**", redirectTo:"principal"},
  //{path:"principal", component:PrincipalComponent},
  {path:"tipoBebida", component:TipoBebidaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
