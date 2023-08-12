import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  public titulo: any | undefined;
  public estilo: string | undefined;
  constructor(private shareDataService:SharedDataService) { }
  


  ngOnInit(): void {
    this.shareDataService.titulo=this.titulo;
    
  }

}
