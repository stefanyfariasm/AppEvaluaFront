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

  currentImageAmargor: string | null = localStorage.getItem("imagen-sabor-amargor") ? localStorage.getItem("imagen-sabor-amargor") : '../../assets/img/grafica/inicial.jpeg';
  currentImageEquilibrio: string | null = localStorage.getItem("imagen-sabor-equilibrio") ? localStorage.getItem("imagen-sabor-equilibrio") : '../../assets/img/grafica/inicial.jpeg';
  currentImageRetrogusto: string | null = localStorage.getItem("imagen-sabor-retrogusto") ? localStorage.getItem("imagen-sabor-retrogusto") : '../../assets/img/grafica/inicial.jpeg';
  currentImageMalta: string | null = localStorage.getItem("imagen-sabor-malta") ? localStorage.getItem("imagen-sabor-malta") : '../../assets/img/grafica/inicial.jpeg';
  currentImageLupulos: string | null = localStorage.getItem("imagen-sabor-lupulos") ? localStorage.getItem("imagen-sabor-lupulos") : '../../assets/img/grafica/inicial.jpeg';
  currentImageFermen: string | null = localStorage.getItem("imagen-sabor-fermen") ? localStorage.getItem("imagen-sabor-fermen") : '../../assets/img/grafica/inicial.jpeg';

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
      localStorage.setItem("imagen-sabor-amargor",nuevaImagen)
      localStorage.setItem("sumaSabor",(this.seleccionAmargor + this.seleccionEquilibrio + this.seleccionRetrogusto + this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString())
  }

  cambiarImagenEquilibrio(nuevaImagen: string) {
      this.currentImageEquilibrio = nuevaImagen;
      this.seleccionEquilibrio = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
      localStorage.setItem("imagen-sabor-equilibrio",nuevaImagen)
      localStorage.setItem("sumaSabor",(this.seleccionAmargor + this.seleccionEquilibrio + this.seleccionRetrogusto + this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString())
  }


  cambiarImagenRetrogusto(nuevaImagen: string) {
    this.currentImageRetrogusto = nuevaImagen; 
    this.seleccionRetrogusto = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    this.valorInapropiadoRetrogusto = false;
    localStorage.setItem("imagen-sabor-retrogusto",nuevaImagen)
    localStorage.setItem("sumaSabor",(this.seleccionAmargor + this.seleccionEquilibrio + this.seleccionRetrogusto + this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString())
}


  cambiarImagenMalta(nuevaImagen: string) {
      this.currentImageMalta = nuevaImagen;
      this.seleccionMalta = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
      localStorage.setItem("imagen-sabor-malta",nuevaImagen)
      localStorage.setItem("sumaSabor",(this.seleccionAmargor + this.seleccionEquilibrio + this.seleccionRetrogusto + this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString())
  }

  cambiarImagenLupulos(nuevaImagen: string) {

      this.currentImageLupulos = nuevaImagen;
      this.seleccionLupulos = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
  }

  cambiarImagenFermen(nuevaImagen: string) {
    this.currentImageFermen = nuevaImagen; 
    this.seleccionFermen = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    this.valorInapropiadoFerme = false;
    localStorage.setItem("imagen-sabor-fermen",nuevaImagen)
    localStorage.setItem("sumaSabor",(this.seleccionAmargor + this.seleccionEquilibrio + this.seleccionRetrogusto + this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString())
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



  sumarSeleccionesSabor(): any {
    return localStorage.getItem("sumaSabor") ? localStorage.getItem("sumaSabor") : localStorage.setItem("sumaSabor",(this.seleccionAmargor + this.seleccionEquilibrio + this.seleccionRetrogusto + this.seleccionMalta + this.seleccionLupulos + this.seleccionFermen).toString());
  }

}
