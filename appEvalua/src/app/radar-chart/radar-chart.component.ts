import { Component,  } from "@angular/core";
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts'


@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent {
  devolucion: any = "";
  // Radar
  public demoradarChartLabels:string[] = ['Aroma', 'Apariencia', 'Sabor', 'Sensacion en boca', 'General'];
  
  valorAroma = localStorage.getItem("sumaAroma") ? localStorage.getItem("sumaAroma") : 0;
  valorApariencia = localStorage.getItem("sumaApariencia") ? localStorage.getItem("sumaApariencia") : 0;
  valorSabor = localStorage.getItem("sumaSabor") ? localStorage.getItem("sumaSabor") : 0;
  valorSensacion = localStorage.getItem("sumaSensacion") ? localStorage.getItem("sumaSensacion") : 0;
  valorGeneral = localStorage.getItem("sumaGeneral") ? localStorage.getItem("sumaGeneral") : 0;
  total = Math.floor((Number(this.valorAroma!) + Number(this.valorApariencia!) + Number(this.valorSabor!) + Number(this.valorSensacion!) + Number(this.valorGeneral!))/5);
  public demoradarChartData:any = [
    {data: [this.valorAroma, this.valorApariencia, this.valorSabor, this.valorSensacion, this.valorGeneral], label: 'Resultado',},
  ];
  public radarChartType: ChartType = 'radar';
  
  public demoradarChartOptions:any = 
    {  
      responsive: true,
      maintainAspectRatio: false
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  finalizarEvaluacion(){
    
  }
}