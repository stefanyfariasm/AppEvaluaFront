import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-flotante',
  templateUrl: './titulo-flotante.component.html',
  styleUrls: ['./titulo-flotante.component.css']
})
export class TituloFlotanteComponent implements OnInit {

  Titulo = 'Titulo  de cata ';
  Estilo = 'Estilo ';
  Nota = 'Nota';
  ngOnInit(): void {
  }

}
