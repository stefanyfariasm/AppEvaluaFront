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
  currentImageCuerpo: string | null = localStorage.getItem("imagen-sensacion-cuerpo") ? localStorage.getItem("imagen-sensacion-cuerpo") : '../../assets/img/grafica/inicial.jpeg';
  currentImageCarbonatacion: string | null = localStorage.getItem("imagen-sensacion-carbonatacion") ? localStorage.getItem("imagen-sensacion-carbonatacion") : '../../assets/img/grafica/inicial.jpeg';
  currentImageCalentamiento: string | null = localStorage.getItem("imagen-sensacion-calentamiento") ? localStorage.getItem("imagen-sensacion-calentamiento") : '../../assets/img/grafica/inicial.jpeg';
  currentImageCremosidad: string | null = localStorage.getItem("imagen-sensacion-cremosidad") ? localStorage.getItem("imagen-sensacion-cremosidad") : '../../assets/img/grafica/inicial.jpeg';
  currentImageAstringencia: string | null = localStorage.getItem("imagen-sensacion-astringencia") ? localStorage.getItem("imagen-sensacion-astringencia") : '../../assets/img/grafica/inicial.jpeg';


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
    this.currentImageCuerpo = nuevaImagen;
    this.seleccionCuerpo = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    localStorage.setItem("imagen-sensacion-cuerpo",nuevaImagen)
    localStorage.setItem("sumaSensacion",(this.seleccionCuerpo + this.seleccionCarbonatacion + this.seleccionCalentamiento + this.seleccionCremosidad +this.seleccionAstringencia).toString())
}

  cambiarImagenCarbonatacion(nuevaImagen: string) {
    this.currentImageCarbonatacion = nuevaImagen;
    this.seleccionCarbonatacion = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    localStorage.setItem("imagen-sensacion-carbonatacion",nuevaImagen)
    localStorage.setItem("sumaSensacion",(this.seleccionCuerpo + this.seleccionCarbonatacion + this.seleccionCalentamiento + this.seleccionCremosidad +this.seleccionAstringencia).toString())
}


  cambiarImagenCalentamiento(nuevaImagen: string) {
    this.currentImageCalentamiento = nuevaImagen; 
    this.seleccionCalentamiento = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    this.valorInapropiadoCalentamiento = false;
    localStorage.setItem("imagen-sensacion-calentamiento",nuevaImagen)
    localStorage.setItem("sumaSensacion",(this.seleccionCuerpo + this.seleccionCarbonatacion + this.seleccionCalentamiento + this.seleccionCremosidad +this.seleccionAstringencia).toString())
}

  cambiarImagenCremosidad(nuevaImagen: string) {
    this.currentImageCremosidad = nuevaImagen; 
    this.seleccionCremosidad = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    this.valorInapropiadoCremosidad = false;
    localStorage.setItem("imagen-sensacion-cremosidad",nuevaImagen)
    localStorage.setItem("sumaSensacion",(this.seleccionCuerpo + this.seleccionCarbonatacion + this.seleccionCalentamiento + this.seleccionCremosidad +this.seleccionAstringencia).toString())
}

  cambiarImagenAstringencia(nuevaImagen: string) {
    this.currentImageAstringencia = nuevaImagen; 
    this.seleccionAstringencia = nuevaImagen.includes('inicial') ? 0  : (nuevaImagen.includes('bajo') ? 1 : (nuevaImagen.includes('medio') ? 3 : 5));
    this.valorInapropiadoAstringencia = false;
    localStorage.setItem("imagen-sensacion-astringencia",nuevaImagen)
    localStorage.setItem("sumaSensacion",(this.seleccionCuerpo + this.seleccionCarbonatacion + this.seleccionCalentamiento + this.seleccionCremosidad +this.seleccionAstringencia).toString())
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

  sumarSeleccionesSensacion(): any {
    return localStorage.getItem("sumaSensacion") ? localStorage.getItem("sumaSensacion") : localStorage.setItem("sumaSensacion",(this.seleccionCuerpo + this.seleccionCarbonatacion + this.seleccionCalentamiento + this.seleccionCremosidad +this.seleccionAstringencia).toString());
  }

}
