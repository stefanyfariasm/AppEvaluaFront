import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadarChartComponent } from './radar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';

describe('RadarChartComponent', () => {
  let component: RadarChartComponent;
  let fixture: ComponentFixture<RadarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgChartsModule],
      declarations: [RadarChartComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize chart data and options', () => {
    expect(component.demoradarChartLabels).toEqual(['Aroma', 'Apariencia', 'Sabor', 'Sensacion en boca', 'General']);

    // Note: The chart data and options are directly set based on localStorage values in the provided code.
    // You can add more specific expectations based on your requirements.
    expect(component.demoradarChartData).toEqual([
      { data: [component.valorAroma, component.valorApariencia, component.valorSabor, component.valorSensacion, component.valorGeneral], label: 'Resultado' }
    ]);

    expect(component.radarChartType).toEqual('radar');

    expect(component.demoradarChartOptions).toEqual({
      responsive: true,
      maintainAspectRatio: false
    });
  });

  it('should log chart click event', () => {
    spyOn(console, 'log');
    const event = {};
    component.chartClicked(event);
    expect(console.log).toHaveBeenCalledWith(event);
  });

  it('should log chart hover event', () => {
    spyOn(console, 'log');
    const event = {};
    component.chartHovered(event);
    expect(console.log).toHaveBeenCalledWith(event);
  });
});

