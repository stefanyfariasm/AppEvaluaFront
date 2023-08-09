import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensacion',
  templateUrl: './sensacion.component.html',
  styleUrls: ['./sensacion.component.css']
})
export class SensacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentImageCuerpo: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageCarbonatacion: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageCalentamiento: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageCremosidad: string = '../../assets/img/grafica/inicial.jpeg';
  currentImageAstringencia: string = '../../assets/img/grafica/inicial.jpeg';


  seleccionCuerpo: number = 0;
  seleccionCarbonatacion: number = 0;
  seleccionCalentamiento: number = 0;
  seleccionCremosidad: number = 0;
  seleccionAstringencia: number = 0;


  valorInapropiadoCuerpo: boolean = false;
  valorInapropiadoCarbonatacion: boolean = false;
  valorInapropiadoCalentamiento: boolean = false;
  valorInapropiadoCremosidad: boolean = false;
  valorInapropiadoAstringencia: boolean = false;



  cambiarImagenCuerpo(nuevaImagen: string) {
    if (this.valorInapropiadoCuerpo) {
      console.log("Checkbox inapropiado en Cuerpo seleccionado: true");
      this.currentImageCuerpo= '../../assets/img/inicial.jpeg';
    } else {
      console.log("Checkbox inapropiado en Cuerpo seleccionado: false");
      this.currentImageCuerpo = nuevaImagen;
      this.seleccionCuerpo = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    }
    
  }

  cambiarImagenCarbonatacion(nuevaImagen: string) {

    if (this.valorInapropiadoCarbonatacion) {
      console.log("Checkbox inapropiado en Cuerpo seleccionado: true");
      this.currentImageCarbonatacion= '../../assets/img/inicial.jpeg';

    } else {
      console.log("Checkbox inapropiado en Cuerpo seleccionado: false");
      this.currentImageCarbonatacion = nuevaImagen;
      this.seleccionCarbonatacion = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    }

    if (this.valorInapropiadoCarbonatacion) {
      console.log("Checkbox inapropiado en Cuerpo seleccionado: true");
      this.currentImageCarbonatacion= '../../assets/img/inicial.jpeg';}
  }

  cambiarImagenCalentamiento(nuevaImagen: string) {
    this.currentImageCalentamiento = nuevaImagen; 
    this.seleccionCalentamiento = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    this.valorInapropiadoCalentamiento = false;
  }

  cambiarImagenCremosidad(nuevaImagen: string) {
    this.currentImageCremosidad = nuevaImagen; 
    this.seleccionCremosidad = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    this.valorInapropiadoCremosidad = false;
  }

  cambiarImagenAstringencia(nuevaImagen: string) {
    this.currentImageAstringencia = nuevaImagen; 
    this.seleccionAstringencia = nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5);
    this.valorInapropiadoAstringencia = false;
  }


  checkboxChangedCuerpo(event: any) {
    this.valorInapropiadoCuerpo = event.target.checked;
  }

  checkboxChangedCarbonatacion(event: any) {
    this.valorInapropiadoCarbonatacion = event.target.checked;
  }
  checkboxChangedCalentamiento(event: any) {
    this.valorInapropiadoCalentamiento = event.target.checked;
  }

  checkboxChangedCremosidad(event: any) {
    this.valorInapropiadoCremosidad= event.target.checked;
  }
  checkboxChangedAstringencia(event: any) {
    this.valorInapropiadoAstringencia = event.target.checked;
  }

  sumarSelecciones(): number {
    return this.seleccionCuerpo + this.seleccionCarbonatacion + this.seleccionCalentamiento + this.seleccionCremosidad +this.seleccionAstringencia;
  }

}
