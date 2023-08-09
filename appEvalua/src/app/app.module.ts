import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { TipoBebidaComponent } from './tipo-bebida/tipo-bebida.component';
import { EstilosComponent } from './estilos/estilos.component';
import { SharedDataService } from './serviciosGenerales/shared-data.service';


/////////////
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { TituloFlotanteComponent } from './titulo-flotante/titulo-flotante.component';
import { MenuCategoriasComponent } from './menu-categorias/menu-categorias.component';
import { AromaComponent } from './aroma/aroma.component';
import { HttpClientModule } from '@angular/common/http';

/////////////////
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TipoBebidaComponent,
    EstilosComponent,
    //SharedDataService,
    BarraSuperiorComponent,
    EvaluacionComponent,
    TituloFlotanteComponent,
    MenuCategoriasComponent,
    AromaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
