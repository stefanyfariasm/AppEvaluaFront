import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fallas-card',
  templateUrl: './fallas-card.component.html',
  styleUrls: ['./fallas-card.component.css']
})
export class FallasCardComponent {
  @Input() title: string = '';
  opciones: string[] = ['Nulo', 'Bajo', 'Medio', 'Alto'];
  selectedOptions: boolean[] = [false, false, false, false];
  @Input() nivel: number =0;

  selectNivel(index: number) {
    for (let i = 0; i < this.selectedOptions.length; i++) {
      this.selectedOptions[i] = i === index;
    }
  }
}
