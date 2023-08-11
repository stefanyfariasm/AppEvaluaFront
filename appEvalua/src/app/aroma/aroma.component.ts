
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aroma',
  templateUrl: './aroma.component.html',
  styleUrls: ['./aroma.component.css']
})
export class AromaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentImageMalta: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageLupulos: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageFermen: string = '../../assets/img/grafica/inicial.jpeg';

  seleccionMalta: number = 0;
  seleccionLupulos: number = 0;
  seleccionFermen: number = 0;

  valorInapropiadoMalta: boolean = false;
  valorInapropiadoLupulo: boolean = false;
  valorInapropiadoFerme: boolean = false;


  cambiarImagenMalta(nuevaImagen: string) {
      this.currentImageMalta = nuevaImagen;
      this.seleccionMalta = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
  }

  cambiarImagenLupulos(nuevaImagen: string) {
      this.currentImageLupulos = nuevaImagen;
      this.seleccionLupulos = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
  }

  cambiarImagenFermen(nuevaImagen: string) {
    this.currentImageFermen = nuevaImagen; 
    this.seleccionFermen = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));

  }


  checkboxChangedMalta(event: any) {
    this.valorInapropiadoMalta = event.target.checked;
  }

  checkboxChangedLupulo(event: any) {
    this.valorInapropiadoLupulo = event.target.checked;
  }
  checkboxChangedFerme(event: any) {
    this.valorInapropiadoFerme = event.target.checked;
  }

  sumarSeleccionesAroma(): number {
    return this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen;
  }

}


