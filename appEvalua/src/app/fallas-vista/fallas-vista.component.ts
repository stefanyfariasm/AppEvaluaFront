import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fallas-vista',
  templateUrl: './fallas-vista.component.html',
  styleUrls: ['./fallas-vista.component.css']
})
export class FallasVistaComponent  {

  matriz: any[][] = [
    [{ title: 'Acetaldeíhdo', nivel: 0 }, { title: 'Diacetilo', nivel: 0 }, { title: 'Golpe de Luz', nivel: 0 },{ title: 'Oxidado', nivel: 0 }],
    [{ title: 'Alcoholic / Caliente', nivel: 0 }, { title: 'DMS', nivel: 0 }, { title: 'Medicinal', nivel: 0 },{ title: 'Fenolico', nivel: 0 }],
    [{ title: 'Astringente', nivel: 0 }, { title: 'Esteroso', nivel: 0 }, { title: 'Metálico', nivel: 0 },{ title: 'Plástico', nivel: 0 }],

  ];

  guardarDatos() {
    
    for (const row of this.matriz) {
      for (const card of row) {
        console.log(`Título: ${card.title}, Nivel: ${card.nivel}`);
      }
    }
  }

}
