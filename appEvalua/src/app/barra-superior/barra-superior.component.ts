import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
  public titulo: string | undefined;
  public estilo: string | undefined;
  constructor(private sharedDataService:SharedDataService) { }

  ngOnInit(): void {
  }

}
