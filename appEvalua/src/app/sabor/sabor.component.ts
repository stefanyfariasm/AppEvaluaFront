import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabor',
  templateUrl: './sabor.component.html',
  styleUrls: ['./sabor.component.css']
})
export class SaborComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentImageAmargor: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageEquilibrio: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageRetrogusto: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageMalta: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageLupulos: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageFermen: string = '../../assets/img/grafica/inicial.jpeg';

  seleccionAmargor: number = 0;
  seleccionEquilibrio: number = 0;
  seleccionRetrogusto: number = 0;
  seleccionMalta: number = 0;
  seleccionLupulos: number = 0;
  seleccionFermen: number = 0;

  valorInapropiadoAmargor: boolean = false;
  valorInapropiadoEquilibrio: boolean = false;
  valorInapropiadoRetrogusto: boolean = false;
  valorInapropiadoMalta: boolean = false;
  valorInapropiadoLupulo: boolean = false;
  valorInapropiadoFerme: boolean = false;


  cambiarImagenAmargor(nuevaImagen: string) {
      this.currentImageAmargor = nuevaImagen;
      this.seleccionAmargor = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    
  }

  cambiarImagenEquilibrio(nuevaImagen: string) {
      this.currentImageEquilibrio = nuevaImagen;
      this.seleccionEquilibrio = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    }


  cambiarImagenRetrogusto(nuevaImagen: string) {
    this.currentImageRetrogusto = nuevaImagen; 
    this.seleccionRetrogusto = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    this.valorInapropiadoRetrogusto = false;
  }


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
    this.valorInapropiadoFerme = false;
  }



  checkboxChangedAmargor(event: any) {
    this.valorInapropiadoAmargor = event.target.checked;
  }

  checkboxChangedEquilibrio(event: any) {
    this.valorInapropiadoEquilibrio = event.target.checked;
  }
  checkboxChangedRetrogusto(event: any) {
    this.valorInapropiadoRetrogusto = event.target.checked;
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



  sumarSeleccionesSabor(): number {
    return this.seleccionAmargor + this.seleccionEquilibrio + this.seleccionRetrogusto + this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen;
  }

}
