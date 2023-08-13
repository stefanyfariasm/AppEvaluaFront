import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apariencia',
  templateUrl: './apariencia.component.html',
  styleUrls: ['./apariencia.component.css']
})
export class AparienciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentImageClaridad: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageFormacion: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageRetencion: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageColor: string = '../../assets/img/grafica/color.jpeg';
  currentImageColorEspuma: string = '../../assets/img/grafica/color.jpeg';


  seleccionClaridad: number = 0;
  seleccionFormacion: number = 0;
  seleccionRetencion: number = 0;
  seleccionColor: number = 0;
  seleccionColorEspuma: number = 0;


  cambiarImagenClaridad(nuevaImagen: string) {
      this.currentImageClaridad = nuevaImagen;
      this.seleccionClaridad = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
  }

  cambiarImagenFormacion(nuevaImagen: string) {
      this.currentImageFormacion = nuevaImagen;
      this.seleccionFormacion =  nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
  }

  cambiarImagenRetencion(nuevaImagen: string) {
    this.currentImageRetencion = nuevaImagen; 
    this.seleccionRetencion =  nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
  }

  cambiarImagenColor(nuevaImagen: string) {
    this.currentImageColor = nuevaImagen; 
    this.seleccionColor =  nuevaImagen.includes('color') ? 0  : (nuevaImagen.includes('ambar') ? 1 : (nuevaImagen.includes('oro') ? 2 :
    nuevaImagen.includes('amarillo') ? 3:nuevaImagen.includes('negro') ? 4: nuevaImagen.includes('marron') ? 5: 6))
  }

  cambiarImagenColorEspuma(nuevaImagen: string) {
    this.currentImageColorEspuma = nuevaImagen; 
    this.seleccionColorEspuma = nuevaImagen.includes('color') ? 0  : (nuevaImagen.includes('ambar') ? 1 : (nuevaImagen.includes('oro') ? 2 :
    nuevaImagen.includes('amarillo') ? 3:nuevaImagen.includes('negro') ? 4: nuevaImagen.includes('marron') ? 5: 6))
  }

  sumarSeleccionesApariencia(): number {
    return this.seleccionClaridad + this.seleccionFormacion + this.seleccionRetencion + this.seleccionColor +this.seleccionColorEspuma;
  }

}
