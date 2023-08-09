import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparienciaComponent } from './apariencia.component';

describe('AparienciaComponent', () => {
  let component: AparienciaComponent;
  let fixture: ComponentFixture<AparienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
