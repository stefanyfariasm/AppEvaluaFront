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
  currentImageClaridad: string | null = localStorage.getItem("imagen-apariencia-claridad") ? localStorage.getItem("imagen-apariencia-claridad") : '../../assets/img/grafica/inicial.jpeg';
  currentImageFormacion: string | null = localStorage.getItem("imagen-apariencia-formacion") ? localStorage.getItem("imagen-apariencia-formacion") : '../../assets/img/grafica/inicial.jpeg';
  currentImageRetencion: string | null = localStorage.getItem("imagen-apariencia-retencion") ? localStorage.getItem("imagen-apariencia-retencion") : '../../assets/img/grafica/inicial.jpeg';
  currentImageColor: string | null = localStorage.getItem("imagen-apariencia-color") ? localStorage.getItem("imagen-apariencia-color") : '../../assets/img/grafica/inicial.jpeg';
  currentImageColorEspuma: string | null = localStorage.getItem("imagen-apariencia-espuma") ? localStorage.getItem("imagen-apariencia-espuma") : '../../assets/img/grafica/inicial.jpeg';


  seleccionClaridad: number = 0;
  seleccionFormacion: number = 0;
  seleccionRetencion: number = 0;
  seleccionColor: number = 0;
  seleccionColorEspuma: number = 0;


  cambiarImagenClaridad(nuevaImagen: string) {
      this.currentImageClaridad = nuevaImagen;
      this.seleccionClaridad = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
      localStorage.setItem("imagen-apariencia-claridad",nuevaImagen)
      localStorage.setItem("sumaApariencia",(this.seleccionClaridad + this.seleccionFormacion + this.seleccionRetencion + this.seleccionColor +this.seleccionColorEspuma).toString())
  }

  cambiarImagenFormacion(nuevaImagen: string) {
      this.currentImageFormacion = nuevaImagen;
      this.seleccionFormacion =  nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
      localStorage.setItem("imagen-apariencia-formacion",nuevaImagen)
      localStorage.setItem("sumaApariencia",(this.seleccionClaridad + this.seleccionFormacion + this.seleccionRetencion + this.seleccionColor +this.seleccionColorEspuma).toString())
  }

  cambiarImagenRetencion(nuevaImagen: string) {
    this.currentImageRetencion = nuevaImagen; 
    this.seleccionRetencion =  nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    localStorage.setItem("imagen-apariencia-retencion",nuevaImagen)
    localStorage.setItem("sumaApariencia",(this.seleccionClaridad + this.seleccionFormacion + this.seleccionRetencion + this.seleccionColor +this.seleccionColorEspuma).toString())
}

  cambiarImagenColor(nuevaImagen: string) {
    this.currentImageColor = nuevaImagen; 
    this.seleccionColor =  nuevaImagen.includes('color') ? 0  : (nuevaImagen.includes('ambar') ? 1 : (nuevaImagen.includes('oro') ? 2 :
    nuevaImagen.includes('amarillo') ? 3:nuevaImagen.includes('negro') ? 4: nuevaImagen.includes('marron') ? 5: 6))
    localStorage.setItem("imagen-apariencia-color",nuevaImagen)
    localStorage.setItem("sumaApariencia",(this.seleccionClaridad + this.seleccionFormacion + this.seleccionRetencion + this.seleccionColor +this.seleccionColorEspuma).toString())
}

  cambiarImagenColorEspuma(nuevaImagen: string) {
    this.currentImageColorEspuma = nuevaImagen; 
    this.seleccionColorEspuma = nuevaImagen.includes('color') ? 0  : (nuevaImagen.includes('ambar') ? 1 : (nuevaImagen.includes('oro') ? 2 :
    nuevaImagen.includes('amarillo') ? 3:nuevaImagen.includes('negro') ? 4: nuevaImagen.includes('marron') ? 5: 6))
    localStorage.setItem("imagen-apariencia-espuma",nuevaImagen)
    localStorage.setItem("sumaApariencia",(this.seleccionClaridad + this.seleccionFormacion + this.seleccionRetencion + this.seleccionColor +this.seleccionColorEspuma).toString())
}


  sumarSeleccionesApariencia(): any {
    return localStorage.getItem("sumaApariencia") ? localStorage.getItem("sumaApariencia") : localStorage.setItem("sumaApariencia",(this.seleccionClaridad + this.seleccionFormacion + this.seleccionRetencion + this.seleccionColor +this.seleccionColorEspuma).toString());
  }

}
