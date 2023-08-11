import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {


  public titulo: string | undefined;
  public estilo: string | undefined;
  constructor(private sharedDataService:SharedDataService) { }
  guardarDatos(): void {
    this.sharedDataService.titulo = this.titulo;
    this.sharedDataService.estilo = this.estilo;
  }
  ngOnInit(): void {
  }


  seccionActual: string = 'aroma'; 
  
  siguienteSeccion() {

    if (this.seccionActual === 'aroma') {
      this.seccionActual = 'apariencia';
    } else if (this.seccionActual === 'apariencia') {
      this.seccionActual = 'sabor';
    } else if (this.seccionActual === 'sabor') {
      this.seccionActual = 'sensacion';
    }
  }
}
