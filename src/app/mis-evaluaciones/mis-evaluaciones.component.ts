import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Evaluacion } from './evaluacion.model';

@Component({
  selector: 'app-mis-evaluaciones',
  templateUrl: './mis-evaluaciones.component.html',
  styleUrls: ['./mis-evaluaciones.component.css']
})
export class MisEvaluacionesComponent implements OnInit {

  evaluaciones: Evaluacion[] = [];
  seleccion:any = false;
  titulo :any;
  estilo :any;
  valorAroma :any;
  valorApariencia :any;
  valorSabor :any;
  valorSensacion :any;
  valorGeneral :any;
  imageMalta :any;
  imageLupulos :any;
  imageFermen :any;
  imageClaridad :any;
  imageFormacion :any;
  imageRetencion :any;
  imageColor :any;
  imageColorEspuma :any;
  imageAmargor1 :any;
  imageEquilibrio1 :any;
  imageRetrogusto1 :any;
  imageMalta1 :any;
  imageLupulos1 :any;
  imageFermen1 :any;
  imageCuerpo :any;
  imageCarbonatacion :any;
  imageCalentamiento :any;
  imageCremosidad :any;
  imageAstringencia :any;
  
  constructor(private apiService: ApiService) { }

  regresar(){
    this.seleccion = false;
  }
  ngOnInit(): void {
    this.apiService.getEvaluaciones().subscribe(
      (data: Evaluacion[]) => {
        this.evaluaciones = data;
        console.log(this.evaluaciones)
      },
      error => {
        console.error('Error al obtener las evaluaciones', error);
      }
    );
  }
  seleccionar(evaluacion:any){
    for(let elemento in evaluacion.notas){
      if( elemento == "imageColor") this.imageColor = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageMalta") this.imageMalta = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageCuerpo") this.imageCuerpo = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageFermen") this.imageFermen = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageMalta1") this.imageMalta1 = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageFermen1") this.imageFermen1 = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageLupulos") this.imageLupulos = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageAmargor1") this.imageAmargor1 = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageClaridad") this.imageClaridad = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageLupulos1") this.imageLupulos1 = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageFormacion") this.imageFormacion = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageRetencion") this.imageRetencion = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageCremosidad") this.imageCremosidad = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageColorEspuma") this.imageColorEspuma = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageEquilibrio1") this.imageEquilibrio1 = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageRetrogusto1") this.imageRetrogusto1 = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageAstringencia") this.imageAstringencia = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageCalentamiento") this.imageCalentamiento = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "imageCarbonatacion") this.imageCarbonatacion = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : '../../assets/img/grafica/inicial.jpeg';
      else if( elemento == "sumaAroma") this.valorAroma = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : 0;
      else if( elemento == "sumaApariencia") this.valorApariencia = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : 0;
      else if( elemento == "sumaGeneral") this.valorGeneral = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : 0;
      else if( elemento == "sumaSabor") this.valorSabor = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : 0;
      else if( elemento == "sumaSensacion") this.valorSensacion = evaluacion.notas[elemento] ? evaluacion.notas[elemento] : 0;  
    }
    localStorage.clear()
    this.seleccion = true;
  }
}