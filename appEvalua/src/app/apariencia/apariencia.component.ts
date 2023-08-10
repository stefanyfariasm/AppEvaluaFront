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


  valorInapropiadoClaridad: boolean = false;
  valorInapropiadoFormacion: boolean = false;
  valorInapropiadoRetencion: boolean = false;
  valorInapropiadoColor: boolean = false;
  valorInapropiadoColorEspuma: boolean = false;



  cambiarImagenClaridad(nuevaImagen: string) {
    if (this.valorInapropiadoClaridad) {
      console.log("Checkbox inapropiado en Claridad seleccionado: true");
      this.currentImageClaridad= '../../assets/img/inicial.jpeg';
    } else {
      console.log("Checkbox inapropiado en Claridad seleccionado: false");
      this.currentImageClaridad = nuevaImagen;
      this.seleccionClaridad = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    }
    
  }

  cambiarImagenFormacion(nuevaImagen: string) {

    if (this.valorInapropiadoFormacion) {
      console.log("Checkbox inapropiado en Claridad seleccionado: true");
      this.currentImageFormacion= '../../assets/img/inicial.jpeg';

    } else {
      console.log("Checkbox inapropiado en Claridad seleccionado: false");
      this.currentImageFormacion = nuevaImagen;
      this.seleccionFormacion = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    }

    if (this.valorInapropiadoFormacion) {
      console.log("Checkbox inapropiado en Claridad seleccionado: true");
      this.currentImageFormacion= '../../assets/img/inicial.jpeg';}
  }

  cambiarImagenRetencion(nuevaImagen: string) {
    this.currentImageRetencion = nuevaImagen; 
    this.seleccionRetencion = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    this.valorInapropiadoRetencion = false;
  }

  cambiarImagenColor(nuevaImagen: string) {
    this.currentImageColor = nuevaImagen; 
    this.seleccionColor = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    this.valorInapropiadoColor = false;
  }

  cambiarImagenColorEspuma(nuevaImagen: string) {
    this.currentImageColorEspuma = nuevaImagen; 
    this.seleccionColorEspuma = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    this.valorInapropiadoColorEspuma = false;
  }


  checkboxChangedClaridad(event: any) {
    this.valorInapropiadoClaridad = event.target.checked;
  }

  checkboxChangedFormacion(event: any) {
    this.valorInapropiadoFormacion = event.target.checked;
  }
  checkboxChangedRetencion(event: any) {
    this.valorInapropiadoRetencion = event.target.checked;
  }

  checkboxChangedColor(event: any) {
    this.valorInapropiadoColor= event.target.checked;
  }
  checkboxChangedColorEspuma(event: any) {
    this.valorInapropiadoColorEspuma = event.target.checked;
  }

  sumarSeleccionesApariencia(): number {
    return this.seleccionClaridad + this.seleccionFormacion + this.seleccionRetencion + this.seleccionColor +this.seleccionColorEspuma;
  }

}
