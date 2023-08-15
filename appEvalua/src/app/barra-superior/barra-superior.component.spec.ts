import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSuperiorComponent } from './barra-superior.component';

describe('BarraSuperiorComponent', () => {
  let component: BarraSuperiorComponent;
  let fixture: ComponentFixture<BarraSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize variables correctly', () => {
    expect(component.titulo).toBeUndefined();
    expect(component.estilo).toBeUndefined();
  });


  it('should render the correct title', () => {
    const title = 'Lenin Maingón ';
    component.titulo = title;
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain(title);
  });


  it('should render icons', () => {
    const icons = fixture.nativeElement.querySelectorAll('svg.bi');
    expect(icons.length).toBe(3); 
  });

  

});
