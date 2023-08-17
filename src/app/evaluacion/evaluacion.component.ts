import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

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
  constructor(private sharedDataService:SharedDataService, private router: Router, private api: ApiService) { }
  guardarDatos(): void {
    this.sharedDataService.titulo = this.titulo;
    this.sharedDataService.estilo = this.estilo;
  }
  ngOnInit(): void {}
  valorAroma=localStorage.getItem("sumaAroma");
  valorApariencia=localStorage.getItem("sumaApariencia");
  valorGeneral= localStorage.getItem("sumaGeneral");
  valorSabor= localStorage.getItem("sumaSabor");
  valorSensacion= localStorage.getItem("sumaSensacion");
  data = {
    user:"Daniel",
    nombre: localStorage.getItem("titulo"),
    estilo: localStorage.getItem("estilo"),
    nota_final: Math.floor((Number(this.valorAroma!) + Number(this.valorApariencia!) + Number(this.valorSabor!) + Number(this.valorSensacion!) + Number(this.valorGeneral!))/5),
    notas: {
      imageMalta: localStorage.getItem("imagen-aroma-malta"),
      imageLupulos: localStorage.getItem("imagen-aroma-lupulos"),
      imageFermen: localStorage.getItem("imagen-aroma-fermen"),
      imageClaridad: localStorage.getItem("imagen-apariencia-claridad"),
      imageFormacion: localStorage.getItem("imagen-apariencia-formacion"),
      imageRetencion: localStorage.getItem("imagen-apariencia-retencion"),
      imageColor: localStorage.getItem("imagen-apariencia-color"),
      imageColorEspuma: localStorage.getItem("imagen-apariencia-espuma"),
      imageAmargor1: localStorage.getItem("imagen-sabor-amargor"),
      imageEquilibrio1: localStorage.getItem("imagen-sabor-equilibrio"),
      imageRetrogusto1: localStorage.getItem("imagen-sabor-retrogusto"),
      imageMalta1: localStorage.getItem("imagen-sabor-malta"),
      imageLupulos1: localStorage.getItem("imagen-sabor-lupulos"),
      imageFermen1: localStorage.getItem("imagen-sabor-fermen"),
      imageCuerpo: localStorage.getItem("imagen-sensacion-cuerpo"),
      imageCarbonatacion: localStorage.getItem("imagen-sensacion-carbonatacion"),
      imageCalentamiento: localStorage.getItem("imagen-sensacion-calentamiento"),
      imageCremosidad: localStorage.getItem("imagen-sensacion-cremosidad"),
      imageAstringencia: localStorage.getItem("imagen-sensacion-astringencia"),
      valorAroma:localStorage.getItem("sumaAroma"),
      valorApariencia:localStorage.getItem("sumaApariencia"),
      valorGeneral: localStorage.getItem("sumaGeneral"),
      valorSabor: localStorage.getItem("sumaSabor"),
      valorSensacion: localStorage.getItem("sumaSensacion"),
    },
    informacion: localStorage.getItem("info")
  }
  seccionActual: string = 'aroma';
  finalizarEvaluacion(){
    console.log(localStorage.length)
    if(localStorage.length > 24){
      this.api.postEvaluaciones(this.data)
      .subscribe(
        (response: any) => {
          // Manejar la respuesta exitosa aquí
          console.log('Respuesta:', response);
        },
        (error: any) => {
          // Manejar el error aquí
          console.error('Error:', error);
        }
      );
      this.router.navigate(['/myevaluations'])
    }
  }

  guardar_cerrar(){
    this.router.navigate(['/notas'])
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
