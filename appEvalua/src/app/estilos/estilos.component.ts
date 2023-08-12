import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
  
})
export class EstilosComponent implements OnInit {
  //disableSelect = new FormControl(true);

titulo = "";
informacion = "";
item: string | undefined;

estilos: any[]=[];
lista: any[]=[];
listaDescripcion: any[]=[];

  disableSelect: boolean = false;
  
  selectedOption: any | undefined;
  constructor(private sharedDataService: SharedDataService,private apiService:ApiService) { 

  }



  initializeData(): void {
    this.lista = this.estilos.map(estilo => estilo.nombre);
    this.listaDescripcion=this.estilos.map(estilo=>estilo.descripcion )
    this.selectedOption = this.lista; // Establecer un valor predeterminado
    console.log(this.selectedOption)
    console.log("aaa",this.lista)
    console.log("aaa",this.listaDescripcion)
  }

 
ngOnInit(): void {
  this.apiService.getEstilos().subscribe(
    (data) => {
      this.estilos = data; // Almacena los datos en el array estilos
      this.initializeData();
      
    },
    (error) => {
      console.error('Error al obtener los estilos', error);
    }
  );
}
formSubmitted = false;

  guardarDatos1(): void {
    this.formSubmitted = true;

    if (this.formularioValido) {
      // Realiza la acción correspondiente
    }
  }

  get formularioValido(): boolean {
    return this.titulo && this.selectedOption && this.informacion;
  }
 
guardarDatos(): void {
  // Guardar los valores en el servicio
  this.sharedDataService.titulo = this.titulo;
  this.sharedDataService.estilo = this.selectedOption;
  this.sharedDataService.data1=this.lista;
  this.sharedDataService.data2=this.listaDescripcion;
  localStorage.setItem("titulo",this.titulo);
  localStorage.setItem("estilo",this.selectedOption);
}
esAlfanumerico(texto: string) {
  var patron = /^[a-zA-Z0-9]+$/;
  return patron.test(texto);
}

verificarTitulo(): boolean {
  if (this.titulo.length > 4 && this.titulo.length < 100 && this.esAlfanumerico(this.titulo)) {
    return true;
  }
  return false;
}

verificarInformacion(): boolean {
  if (this.informacion.length > 4 && this.informacion.length < 300) {
    return true;
  }
  return false;
}


}
