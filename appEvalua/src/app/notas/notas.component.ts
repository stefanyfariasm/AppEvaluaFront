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



  ngOnInit(): void {
  }
  volverEvaluar(){
    this.router.navigate(['/evaluacion'])
  }
}
