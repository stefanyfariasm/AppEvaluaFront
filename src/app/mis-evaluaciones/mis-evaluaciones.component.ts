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

  constructor(private apiService: ApiService) { }

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
}