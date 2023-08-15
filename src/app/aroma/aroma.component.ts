
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

  currentImageMalta: string | null = localStorage.getItem("imagen-aroma-malta") ? localStorage.getItem("imagen-aroma-malta") : '../../assets/img/grafica/inicial.jpeg';
  currentImageLupulos: string | null  = localStorage.getItem("imagen-aroma-lupulos") ? localStorage.getItem("imagen-aroma-lupulos") : '../../assets/img/grafica/inicial.jpeg';
  currentImageFermen: string | null = localStorage.getItem("imagen-aroma-fermen") ? localStorage.getItem("imagen-aroma-fermen") : '../../assets/img/grafica/inicial.jpeg';

  seleccionMalta: number = 0;
  seleccionLupulos: number = 0;
  seleccionFermen: number = 0;

  valorInapropiadoMalta: boolean = false;
  valorInapropiadoLupulo: boolean = false;
  valorInapropiadoFerme: boolean = false;


  cambiarImagenMalta(nuevaImagen: string) {
      this.currentImageMalta = nuevaImagen;
      this.seleccionMalta = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
      localStorage.setItem("imagen-aroma-malta",nuevaImagen)
      localStorage.setItem("sumaAroma",(this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString())
  }

  cambiarImagenLupulos(nuevaImagen: string) {
      this.currentImageLupulos = nuevaImagen;
      this.seleccionLupulos = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
      localStorage.setItem("imagen-aroma-lupulos",nuevaImagen)
      localStorage.setItem("sumaAroma",(this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString())
  }

  cambiarImagenFermen(nuevaImagen: string) {
    this.currentImageFermen = nuevaImagen; 
    this.seleccionFermen = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    localStorage.setItem("imagen-aroma-fermen",nuevaImagen)
    localStorage.setItem("sumaAroma",(this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString())
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

  sumarSeleccionesAroma(): any {
    return localStorage.getItem("sumaAroma") ? localStorage.getItem("sumaAroma") : localStorage.setItem("sumaAroma",(this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString());
  }

}


