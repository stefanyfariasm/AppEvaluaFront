import { Component,  } from "@angular/core";
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent {
  // Radar
  public demoradarChartLabels:string[] = ['Aroma', 'Apariencia', 'Sabor', 'Sensacion en boca', 'General'];
 
  public demoradarChartData:any = [
    {data: [20, 40, 15, 30, 12], label: 'Puntaje',},
   
  ];
  public radarChartType: ChartType = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}