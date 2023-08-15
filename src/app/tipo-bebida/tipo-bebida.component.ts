import { AfterViewInit, Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tipo-bebida',
  templateUrl: './tipo-bebida.component.html',
  styleUrls: ['./tipo-bebida.component.css']
})
export class TipoBebidaComponent implements AfterViewInit {
  alimentos: any =[]
  tipo1=""
  tipo2=""
  tipo3=""
  tipo4=""
  tipo5=""
  tipo6=""
  constructor(private api: ApiService) { }

  ngAfterViewInit(): void {
    this.api.getAlimentos().subscribe(
      res=>{res.forEach((element: any) => {
        this.alimentos.push(element)
      });
        console.log(this.alimentos[0].nombre)
        this.tipo1=this.alimentos[0].nombre
        this.tipo2=this.alimentos[1].nombre
        this.tipo3=this.alimentos[2].nombre
        this.tipo4=this.alimentos[3].nombre
        this.tipo5=this.alimentos[4].nombre
        this.tipo6=this.alimentos[5].nombre
      },
      err =>console.log(err)
    )
  }
}
