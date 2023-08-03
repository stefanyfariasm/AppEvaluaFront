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

  currentImageMalta: string = '../../assets/img/inicial.jpeg';
  currentImageLupulos: string = '../../assets/img/inicial.jpeg';
  currentImageFermen: string = '../../assets/img/inicial.jpeg';


  cambiarImagenMalta(nuevaImagen: string) {
    this.currentImageMalta = nuevaImagen;
  }

  cambiarImagenLupulos(nuevaImagen: string) {
    this.currentImageLupulos = nuevaImagen;
  }

  cambiarImagenFermen(nuevaImagen: string) {
    this.currentImageFermen = nuevaImagen;
  }

}
