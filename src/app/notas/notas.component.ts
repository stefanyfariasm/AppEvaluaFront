import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor(private shareDataService:SharedDataService, private router: Router) { }
  
  labels:string[] = ['Aroma', 'Apariencia', 'Sabor', 'Sensacion en boca', 'General'];
  titulo = localStorage.getItem("titulo") ? localStorage.getItem("titulo") : "";
  estilo = localStorage.getItem("estilo") ? localStorage.getItem("estilo") : "";
  valorAroma = localStorage.getItem("sumaAroma") ? localStorage.getItem("sumaAroma") : 0;
  valorApariencia = localStorage.getItem("sumaApariencia") ? localStorage.getItem("sumaApariencia") : 0;
  valorSabor = localStorage.getItem("sumaSabor") ? localStorage.getItem("sumaSabor") : 0;
  valorSensacion = localStorage.getItem("sumaSensacion") ? localStorage.getItem("sumaSensacion") : 0;
  valorGeneral = localStorage.getItem("sumaGeneral") ? localStorage.getItem("sumaGeneral") : 0;
  imageMalta = localStorage.getItem("imagen-aroma-malta") ? localStorage.getItem("imagen-aroma-malta") : '../../assets/img/grafica/inicial.jpeg';
  imageLupulos = localStorage.getItem("imagen-aroma-lupulos") ? localStorage.getItem("imagen-aroma-lupulos") : '../../assets/img/grafica/inicial.jpeg';
  imageFermen = localStorage.getItem("imagen-aroma-fermen") ? localStorage.getItem("imagen-aroma-fermen") : '../../assets/img/grafica/inicial.jpeg';
  imageClaridad = localStorage.getItem("imagen-apariencia-claridad") ? localStorage.getItem("imagen-apariencia-claridad") : '../../assets/img/grafica/inicial.jpeg';
  imageFormacion = localStorage.getItem("imagen-apariencia-formacion") ? localStorage.getItem("imagen-apariencia-formacion") : '../../assets/img/grafica/inicial.jpeg';
  imageRetencion = localStorage.getItem("imagen-apariencia-retencion") ? localStorage.getItem("imagen-apariencia-retencion") : '../../assets/img/grafica/inicial.jpeg';
  imageColor = localStorage.getItem("imagen-apariencia-color") ? localStorage.getItem("imagen-apariencia-color") : '../../assets/img/grafica/inicial.jpeg';
  imageColorEspuma = localStorage.getItem("imagen-apariencia-espuma") ? localStorage.getItem("imagen-apariencia-espuma") : '../../assets/img/grafica/inicial.jpeg';
  imageAmargor1 = localStorage.getItem("imagen-sabor-amargor") ? localStorage.getItem("imagen-sabor-amargor") : '../../assets/img/grafica/inicial.jpeg';
  imageEquilibrio1 = localStorage.getItem("imagen-sabor-equilibrio") ? localStorage.getItem("imagen-sabor-equilibrio") : '../../assets/img/grafica/inicial.jpeg';
  imageRetrogusto1 = localStorage.getItem("imagen-sabor-retrogusto") ? localStorage.getItem("imagen-sabor-retrogusto") : '../../assets/img/grafica/inicial.jpeg';
  imageMalta1 = localStorage.getItem("imagen-sabor-malta") ? localStorage.getItem("imagen-sabor-malta") : '../../assets/img/grafica/inicial.jpeg';
  imageLupulos1 = localStorage.getItem("imagen-sabor-lupulos") ? localStorage.getItem("imagen-sabor-lupulos") : '../../assets/img/grafica/inicial.jpeg';
  imageFermen1 = localStorage.getItem("imagen-sabor-fermen") ? localStorage.getItem("imagen-sabor-fermen") : '../../assets/img/grafica/inicial.jpeg';
  imageCuerpo = localStorage.getItem("imagen-sensacion-cuerpo") ? localStorage.getItem("imagen-sensacion-cuerpo") : '../../assets/img/grafica/inicial.jpeg';
  imageCarbonatacion = localStorage.getItem("imagen-sensacion-carbonatacion") ? localStorage.getItem("imagen-sensacion-carbonatacion") : '../../assets/img/grafica/inicial.jpeg';
  imageCalentamiento = localStorage.getItem("imagen-sensacion-calentamiento") ? localStorage.getItem("imagen-sensacion-calentamiento") : '../../assets/img/grafica/inicial.jpeg';
  imageCremosidad = localStorage.getItem("imagen-sensacion-cremosidad") ? localStorage.getItem("imagen-sensacion-cremosidad") : '../../assets/img/grafica/inicial.jpeg';
  imageAstringencia = localStorage.getItem("imagen-sensacion-astringencia") ? localStorage.getItem("imagen-sensacion-astringencia") : '../../assets/img/grafica/inicial.jpeg';
  
  ngOnInit(): void {
  }
  volverEvaluar(){
    this.router.navigate(['/evaluacion'])
  }
}
