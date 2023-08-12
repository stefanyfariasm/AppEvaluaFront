import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  receiveMessage($event:any) {
    this.seccionActual = $event;
    console.log(this.seccionActual)
  }

  public titulo: string | undefined;
  public estilo: string | undefined;
  constructor(private sharedDataService:SharedDataService, private router: Router) { }
  guardarDatos(): void {
    this.sharedDataService.titulo = this.titulo;
    this.sharedDataService.estilo = this.estilo;
  }
  ngOnInit(): void {
  }


  seccionActual: string = 'aroma';
  finalizarEvaluacion(){
    
  }

  guardar_cerrar(){

  }

  siguienteSeccion() {

    if (this.seccionActual === 'aroma') {
      this.seccionActual = 'apariencia';
    } else if (this.seccionActual === 'apariencia') {
      this.seccionActual = 'sabor';
    } else if (this.seccionActual === 'sabor') {
      this.seccionActual = 'sensacion';
    } else if (this.seccionActual === 'sensacion') {
      this.seccionActual = 'fallas';
    } else if (this.seccionActual === 'fallas') {
      this.seccionActual = 'general';
    } else if (this.seccionActual === 'general') {
      this.router.navigate(['/myevaluations']);
    }
    this.guardarDatos();
  }
}
