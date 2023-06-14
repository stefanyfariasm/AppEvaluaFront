import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { TipoBebidaComponent } from './tipo-bebida/tipo-bebida.component';
import { EstilosComponent } from './estilos/estilos.component';


/////////////
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';


/////////////////
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TipoBebidaComponent,
    EstilosComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
